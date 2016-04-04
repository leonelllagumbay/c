Ext.define('iBOSe.view.login.LoginWindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login-loginwindow',
    onSignIn: function(button, e) {

		if(e.type == 'keydown')
		{
			if(e.getKey() != e.ENTER) { 
		         return true;
		    } 
	    }
		
		var dform =  this.getView();
		
		if (dform.getForm().isValid()) {
			dform.getEl().mask(" ...", "loading");
			var dname = dform.down('textfield[name=username]').getValue();
			var dpwd = dform.down('textfield[name=password]');
			
			var hashObj = Ext.create('Ext.ux.crypt.Hash');
	    	console.log('result', hashObj.hex_sha512('leonell'));
			
	    	var rpwd = dpwd.getValue();
	    	var hpwd = hashObj.hex_sha512(rpwd + dname);
			dpwd.setValue(hpwd);
			console.log(dname, hpwd);
			dform.getForm().submit({
				params: {
					username: dname,
					password: hpwd
                },
                timeout: 300000,
		  		reset: true,
		  		failure: function(form, action){
		  			dform.getEl().unmask();	
		  		},
		  		success: function(form, action){
		  			
		  			
		  			if (action.result.message == 'authenticated') {
		  				window.location.reload();
		  			}
		  			dform.getEl().unmask();
		  			if (typeof action.result === 'undefined') {
 		  				window.location.href = '../?bdg=mnnga';
 		  				return true;
 		  			}
					if (action.result.detail=='yessuccessdetail') {
						window.location.href = './?bdg=' + action.result.message;
					} else if(action.result.message == 'accountlockedout') {
						var msg = action.result.detail;
						dur = action.result.duration;
						dform.down('textfield[name=username]').setDisabled(true);
						dform.down('textfield[name=password]').setDisabled(true);
						dform.down('button[action=signin]').setDisabled(true);
						startTime = function() {
						    if(dur < 1) {
								dur = 0;
								clearTimeout(timeoutGGGG);
								dform.down('textfield[name=username]').setDisabled(false);
								dform.down('textfield[name=password]').setDisabled(false);
								dform.down('button[action=signin]').setDisabled(false);
								form.setValues([{
									id: 'displayrespidid',
									value: msg
								}]);
							} else {
								form.setValues([{
									id: 'displayrespidid',
									value: msg + "<br>" + "<b>" + dur + "</b>"
								}]);
								dur = dur - 1;
								timeoutGGGG = setTimeout(function(){ startTime() }, 1500);
							}
						   
						}
						startTime();
					} else if ( action.result.detail=='changepassword' ) {
						var title = 'Change Password Window';
						
						var winRL = Ext.create('Ext.window.Window', {
						    title: title,
						    height: 350,
						    width: 320,
						    modal: true,
						    closable: false,
						    layout: 'fit',
						    items: {  
						        xtype: 'littleloginformchangepwdrequest',
						        border: false
						    }
						}).show();
						
						var theForm = winRL.down('form');
						theForm.getForm().findField("username").setValue(action.result.username);
						theForm.getForm().findField("myoldhashedpwd").setValue(action.result.hashpwd);
						if (action.result.type == 'pwdisexpired') {
							theForm.getForm().findField("logindisplaymore").setValue("Your password is already expired.");
						}
					} else if(action.result.message == 'invalidunameorpassword') {
						var msg = action.result.detail;
						dur = action.result.duration;
						dform.down('textfield[name=username]').setDisabled(true);
						dform.down('textfield[name=password]').setDisabled(true);
						dform.down('button[action=signin]').setDisabled(true);
						startTime = function() {
						    if(dur < 1) {
						    	dur = 0;
						    	clearTimeout(timeoutGGGG);
						    	dform.down('textfield[name=username]').setDisabled(false);
						    	dform.down('textfield[name=password]').setDisabled(false);
						    	dform.down('button[action=signin]').setDisabled(false);
								form.setValues([{
									id: 'displayrespidid',
									value: msg
								}]);
							} else {
								form.setValues([{
									id: 'displayrespidid',
									value: msg + "<br>" + "<b>" + dur + "</b>"
								}]);
								dur = dur - 1;
								timeoutGGGG = setTimeout(function(){ startTime() }, 1500);
							}
						   
						}
						startTime();
					} else {
						form.setValues([{
							id: 'displayrespidid',
							value: action.result.detail
						}]);
					}
		  			
		  		}
	  	});
	  } 
	}
});
