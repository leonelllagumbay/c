
Ext.define("iBOSe.view.notes.CalendarNotes",{
    extend: "Ext.panel.Panel",
    xtype: "mycalendar",
    requires: [
        "iBOSe.view.notes.CalendarNotesController",
        "iBOSe.view.notes.CalendarNotesModel"
    ],

    controller: "notes-calendarnotes",
    viewModel: {
        type: "notes-calendarnotes"
    },
    title: 'My Calendar',
    padding: '0 0 20 0',
    closable: true,
    items: [{
    	xtype: 'datemenu',
    	name: 'simpleCal',
    	showToday: false,
	    floating: false,
	    width: '100%',
	    listeners: {
	    	afterrender: 'onAfterRender',
	    	select: 'onSelect',
	    	click: 'onAfterRender'
	    }
    },{
    	xtype: 'textareafield',
    	id: 'calnotes',
    	padding: 0,
    	name: 'stickydatenote',
    	fieldCls: 'ctextarea',
    	hidden: true,
    	width: '100%',
    	fieldStyle: {
	        backgroundColor: '#EEEE00'
	    },
    	height: 107,
    	value: '',
    	listeners: {
    		blur: 'onBlur'
    	}
    },{
    	xtype: 'displayfield',
    	name: 'tempVal',
    	hidden: true,
    	value: ''
    }]
});
