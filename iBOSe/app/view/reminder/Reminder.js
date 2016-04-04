Ext.define("iBOSe.view.reminder.Reminder",{
    extend: "Ext.panel.Panel",
    xtype: "ibosereminder",
    requires: [
        "iBOSe.view.reminder.ReminderController",
        "iBOSe.view.reminder.ReminderModel",
        //'Ext.diag.layout.Context',
        //'Ext.diag.layout.ContextItem',
        "iBOSe.view.reminder.src.App"
    ],

    controller: "reminder-reminder",
    viewModel: {
        type: "reminder-reminder"
    },
    padding: '0 0 20 0',
    closable: true,
    collapsible: true,
    title: 'eReminders',
    items: [{
    	xtype: 'ereminder'
    }]
});


