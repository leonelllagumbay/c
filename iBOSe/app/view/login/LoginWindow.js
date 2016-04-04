
Ext.define("iBOSe.view.login.LoginWindow",{
    extend: "Ext.form.Panel",
    xtype: "iboselogin",
    requires: [  
        "iBOSe.view.login.LoginWindowController",
        "iBOSe.view.login.LoginWindowModel"
    ],
    width: 277,
    controller: "login-loginwindow",
    viewModel: {
        type: "login-loginwindow"
    },
    items: [{
		xtype: 'textfield',
		name: 'username',
		labelAlign: 'top',
		height: 37,
		allowBlank: false,
		emptyText: 'User name or email',
		width: '95%',
		padding: '7 7 7 7',
		listeners: {
			specialkey: 'onSignIn'
		}
	},{
		xtype: 'textfield',
		name: 'password',
		inputType: 'password',
		height: 37,
		minLength: 1,
		maxLength: 512,
		emptyText: 'Password', 
		labelAlign: 'top',
		allowBlank: false,
		width: '95%',
		padding: '0 7 7 7',
		listeners: {
			specialkey: 'onSignIn'
		}
	},{
		xtype: 'displayfield',
		name: 'logindisplaymore',
		id: 'displayrespidid',
		autoScroll: true,
		value: '',
		padding: 10,
		width: '95%'
	},{
		xtype: 'displayfield',
		name: 'loginwithgoogle',
		padding: '0 7 7 7',
		value: '<a href="https://accounts.google.com/o/oauth2/auth?scope=openid email&redirect_uri=http://localhost:8500&response_type=code&client_id=561695249357-7tkuphd99v8q1ao3skn35hjgegb52s1f.apps.googleusercontent.com">Login with Google</a>'
	},{
		xtype: 'displayfield',
		name: 'home',
		padding: '0 7 7 7',
		value: '<a href="./">Home</a>'
	}],
	
	api: {
		load: 'Ext.administrator.Auth.Login',
        submit: 'Ext.administrator.Auth.Login'
	},
	paramOrder: ['username', 'password'],
	
	buttons: [{
		 padding: 7,
		 width: '100%',
		 text: 'Sign in',
		 action: 'signin',
		 handler: 'onSignIn'
	}]
	
});
