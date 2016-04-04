Ext.define('iBOSe.store.reminder.MemoryCalendarStore', {
    extend: 'Ext.data.Store',
    model: 'iBOSe.model.reminder.CalendarModel',
    autoLoad: true,
	proxy: {
        type: 'ajax',
        url: './app/store/reminder/calendar.json',
        noCache: false,
        
        reader: {
            type: 'json',
            rootProperty: 'calendars'
        }
    }

});
