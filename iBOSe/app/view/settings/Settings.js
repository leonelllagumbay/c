
Ext.define("iBOSe.view.settings.Settings",{
    extend: "Ext.form.Panel",
    xtype: 'ibosesettings',
    requires: [
        "iBOSe.view.settings.SettingsController",
        "iBOSe.view.settings.SettingsModel"
    ],

    controller: "settings-settings",
    viewModel: {
        type: "settings-settings"
    },

    title: 'Settings',
    bodyPadding: 5,
    layout: 'anchor',
    defaults: {
    	anchor: '100%'
    },
    width: '100%',
    height: 300,
    border: true,
    collapsible: true,
    closable: true,
    padding: '0 0 20 0',
    // The fields
    defaultType: 'textfield',
    items: [{
    	fieldLabel: 'First Name',
    	name: 'first',
    	allowBlank: false
    },{
    	fieldLabel: 'Last Name',
    	name: 'last',
    	allowBlank: false
    }],
    
    buttons: [{
    	text: 'Reset',
    	handler: function() {
    		this.up('form').getForm().reset();
    	}
    }, {
    	text: 'Submit',
    	formBind: true, // only enabled once the form is valid
    	disabled: true,
    	handler: 'onSettingsSubmit'
    }]
});
