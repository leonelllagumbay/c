Ext.define('iBOSe.view.settings.SettingsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.settings-settings',
    
    onSettingsSubmit: function(dform) {
    	Ext.Msg.alert('Submit', 'Submitting');
    	var form = dform.up('form').getForm();
		if (form.isValid()) {
			form.submit({
				success: function(form, action) {
					Ext.Msg.alert('Success', action.result.msg);
				},
				failure: function(form, action) {
					Ext.Msg.alert('Failed', action.result.msg);
				}
			});
		}
    }
});
