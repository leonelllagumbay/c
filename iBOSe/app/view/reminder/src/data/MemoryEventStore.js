/*
 * This is a simple in-memory store implementation that is ONLY intended for use with
 * calendar samples running locally in the browser with no external data source. Under
 * normal circumstances, stores that use a MemoryProxy are read-only and intended only
 * for displaying data read from memory. In the case of the calendar, it's still quite
 * useful to be able to deal with in-memory data for sample purposes (as many people 
 * may not have PHP set up to run locally), but by default, updates will not work since the
 * calendar fully expects all CRUD operations to be supported by the store (and in fact
 * will break, for example, if phantom records are not removed properly). This simple
 * class gives us a convenient way of loading and updating calendar event data in memory,
 * but should NOT be used outside of the local samples.
 */

/*
Ext.define('iBOSe.view.reminder.src.data.MemoryEventStore', {
    extend: 'Ext.data.Store',
    model: 'iBOSe.view.reminder.src.data.EventModel',
    
    requires: [
        'Ext.data.proxy.Memory',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
        
    ],
    
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'evts'
        },
        writer: {
            type: 'json'
        }
    },
    
    // private
    constructor: function(config){
        this.callParent(arguments);
        
        this.sorters = this.sorters || [{
            property: iBOSe.view.reminder.src.data.EventMappings.StartDate.name,
            direction: 'ASC'
        }];
        
        this.idProperty = this.idProperty || iBOSe.view.reminder.src.data.EventMappings.EventId.mapping || 'id';
        this.fields = iBOSe.view.reminder.src.data.EventModel.getFields();
        this.onCreateRecords = Ext.Function.createInterceptor(this.onCreateRecords, this.interceptCreateRecords);
        this.initRecs();
    },
    
    // private - override to make sure that any records added in-memory
    // still get a unique PK assigned at the data level
    interceptCreateRecords: function(records, operation, success) {
        if (success) {
            var i = 0,
                rec,
                len = records.length;
            
            for (; i < len; i++) {
                records[i].data[iBOSe.view.reminder.src.data.EventMappings.EventId.name] = records[i].id;
            }
        }
    },
    
    // If the store started with preloaded inline data, we have to make sure the records are set up
    // properly as valid "saved" records otherwise they may get "added" on initial edit.
    initRecs: function(){
        this.each(function(rec){
            rec.store = this;
            rec.phantom = false;
        }, this);
    },
    
    // private - override the default logic for memory storage
    onProxyLoad: function(operation) {
        var me = this,
            records;
        
        if (me.data && me.data.length > 0) {
            // this store has already been initially loaded, so do not reload
            // and lose updates to the store, just use store's latest data
            me.totalCount = me.data.length;
            records = me.data.items;
        }
        else {
            // this is the initial load, so defer to the proxy's result
            var resultSet = operation.getResultSet(),
                successful = operation.wasSuccessful();

            records = operation.getRecords();

            if (resultSet) {
                me.totalCount = resultSet.total;
            }
            if (successful) {
                me.loadRecords(records, operation);
            }
        }

        me.loading = false;
        me.fireEvent('load', me, records, successful);
    }
});

*/
Ext.define('iBOSe.view.reminder.src.data.MemoryEventStore', {
    extend: 'Ext.data.Store',
    model: 'iBOSe.view.reminder.src.data.EventModel',
    
    autoLoad: true, // read
	autoSave: true, // update 
	autoSync: true, // create, 
	autoDestroy: true, // delete
    proxy: {
        type: 'direct',
        api: {
        	update  : Ext.administrator.Reminder.eventUpdate,
			create  : Ext.administrator.Reminder.eventCreate,
			read    : Ext.administrator.Reminder.eventRead,
			destroy : Ext.administrator.Reminder.eventDestroy
		},
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        
        writer: {
            type: 'json',
            nameProperty: 'mapping'
        },
        
        listeners: {
            exception: function(proxy, response, operation, options){
                var msg = response.message ? response.message : Ext.decode(response.responseText).message;
                // ideally an app would provide a less intrusive message display
                Ext.Msg.alert('Server Error', msg);
            }
        }
    },

    // It's easy to provide generic CRUD messaging without having to handle events on every individual view.
    // Note that while the store provides individual add, update and remove events, those fire BEFORE the
    // remote transaction returns from the server -- they only signify that records were added to the store,
    // NOT that your changes were actually persisted correctly in the back end. The 'write' event is the best
    // option for generically messaging after CRUD persistence has succeeded.
    listeners: {
        'write': function(store, operation){
        	console.log(operation);
        	var title = Ext.value(operation.records[0].data[Form.model.reminder.EventMappings.getFields()[0].Title.name], '(No title)');
            switch(operation.action){
                case 'create': 
                    Ext.Msg.alert('Add', 'Added "' + title + '"');
                    break;
                case 'update':
                    Ext.Msg.alert('Update', 'Updated "' + title + '"');
                    break;
                case 'destroy':
                    Ext.Msg.alert('Delete', 'Deleted "' + title + '"');
                    break;
            }
        }
    }
});
