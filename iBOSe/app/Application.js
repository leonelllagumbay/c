/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('iBOSe.Application', {
    extend: 'Ext.app.Application',
    
    name: 'iBOSe',
    defaultToken: 'home', // For routers, single page app
    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
    	console.log('launched');
    },
    
    init: function() {
    	Ext.direct.Manager.addProvider(Ext.administrator.APIDesc);
    }
});
