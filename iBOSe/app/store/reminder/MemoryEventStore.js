Ext.define('iBOSe.store.reminder.MemoryEventStore', {
    extend: 'Ext.data.Store',
    model: 'iBOSe.model.reminder.EventModel',
    
	constructor : function(config) {
		
	    Ext.applyIf(config, {
	        autoLoad: true, //read
    		//autoSave: true, //update autoSync: true //create, autoDestroy: true //delete
	        proxy: {
	            type: 'direct',
	            noCache: false,
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
	            	var title = Ext.value(operation.records[0].data[iBOSe.model.reminder.EventMappings.getFields()[0].Title.name], '(No title)');
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
	    }),
	        
	    this.callParent([config]);
	    
	}

});
