Ext.define('iBOSe.view.home.HomeViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.home-homeview',
    
    init: function() {
    	this.listen({
    		component: {
    			'homeview button': {
    				'click': 'onAccountSignOut'
    			}
    		}
    	})
    },
    
    onHomeRender: function(dgrid, eOpts) {
    	var disViewCtrlr = this; 
        	Ext.administrator.PlayMate.getPlayMateProfile(function(dt) {
        		var vmodel = disViewCtrlr.getViewModel();
        		vmodel.setData({
        			fullname: dt.fullname,
        			profileimage: dt.profileimage
        		});
        	});
    },
    
    onAccountSignOut: function() {
    	
    	Ext.Msg.show({
    	    title:'Thank you for using iBOS/e!',
    	    message: 'Sign Out?',
    	    buttons: Ext.Msg.YESNOCANCEL,
    	    icon: Ext.Msg.QUESTION,
    	    fn: function(btn) {
    	        if (btn === 'yes') {
    	        	Ext.administrator.Administrator.signOutAccount(function(dt) {
    	        		window.location.href = dt['redirect_url'];
    	        	});
    	        }
    	    }
    	});
    }
});
