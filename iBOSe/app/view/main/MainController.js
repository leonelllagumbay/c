/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('iBOSe.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    
    onTabChange: function(tabpanel, newtab) {
    	if (newtab.title != 'Workspace') {
    		window.location.href = '#' + newtab.title.toLowerCase();
    	}	
    },
	
    routes: {
    	'home': 'onHome',
    	'users/:id/:isactive': {
    		before: 'onBeforeUser',
    		action: 'onUsers'
    	},
    	'administrator': 'onAdministrator',
    	'dashboard': 'onDashboard',
    	'apps': 'onApps',
    	'workspace': 'onWorkspace',
    	'workspace/:item': 'onWorkspace'
    },
    
    onHome: function() {
    	var v = this.getView();
    	v.setActiveTab(0);
    },
    
    onBeforeUser: function(id, isactive, action) {
    	Ext.Msg.alert('Before', 'Before action');
    	action.resume();
    	// action.stop(true);
    },
    
    onUsers: function(id, isactive) {
    	Ext.Msg.alert('User app here','Users ' + id + ' ' + isactive);
    },
    
    onAdministrator: function() {
    	Ext.Msg.alert('onAdministrator','Administrator');
    },
    
    onDashboard: function() {
    	var v = this.getView();
    	v.setActiveTab(1);
    },
    
    onApps: function() {
    	var v = this.getView();
    	v.setActiveTab(2);
    },
    
    onWorkspace: function(item) {
    	var v = this.getView();
    	v.setActiveTab(3);

    	if (item) {
	    	var w = Ext.ComponentQuery.query(item)[0];	// item on the workspace item
	    	var c = Ext.getCmp('iboseworkspace');
	    	// if w is defined scroll to it
	    	if (w) {
	    		c.scrollBy(0, w.getY() - 20, true); 
	    	} else {
	    		/*
	    		 * Check if this user has the right permission to access this item application component
	    		 * using direct api
	    		 */
	    		var myMask = Ext.create('Ext.LoadMask',{
	    			target: c,
	    			modal: false,
	    			width: '100%',
	    			height: 87,
	    			dock: 'top',
	    			msg: "Opening......."
	    		});
	    		
	        	myMask.show();
	        	Ext.administrator.Administrator.hasComponentAccess(item, function(result) {
	    			myMask.hide();
	    			if(result['allowed']) {
	    				/* 
	    	    		 * Load the component and scroll to it and focus
	    	    		 * This is the synchronous load
	    	    		 */ 
	    	    		try {
	    	    			c.insert(0, [{
	    		    			xtype: item
	    		    		}]);
	    	    		} catch(e) {
	    	    			console.log("iBOSe W", e);
	    	    		}
	    			} else if (result['requiresauthentication']) {
	    				Ext.create('Ext.window.Window', {
	    				   border: false,
	    				   layout: 'fit',
	    				   modal: true,
	    				   closable: true,
	    				   items: [{
	    					   xtype: result['xtype']
	    				   }]
	    				}).show();
	    			} else {
	    				Ext.Msg.alert('', 'This component is not available at the moment.');
	    			}
	    		});	
	    	}
    	}
    }
});
