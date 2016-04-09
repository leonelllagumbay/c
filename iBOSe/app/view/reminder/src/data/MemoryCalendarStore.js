/*
 * A simple reusable store that loads static calendar field definitions into memory
 * and can be bound to the CalendarCombo widget and used for calendar color selection.
 */
Ext.define('iBOSe.view.reminder.src.data.MemoryCalendarStore', {
    extend: 'Ext.data.Store',
    model: 'iBOSe.view.reminder.src.data.CalendarModel',
    
    requires: [
        'Ext.data.proxy.Memory',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json',
        'iBOSe.view.reminder.src.data.CalendarModel'
    ],
    
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'calendars'
        },
        writer: {
            type: 'json'
        }
    },

    autoLoad: true,
    
    initComponent: function() {
        var me = this,
            calendarData = iBOSe.view.reminder.src.data;
            
        me.sorters = me.sorters || [{
            property: calendarData.CalendarMappings.Title.name,
            direction: 'ASC'
        }];
        
        me.idProperty = me.idProperty || calendarData.CalendarMappings.CalendarId.name || 'id';
        
        me.fields = calendarData.CalendarModel.prototype.fields.getRange();
        
        me.callParent(arguments);
    }
});