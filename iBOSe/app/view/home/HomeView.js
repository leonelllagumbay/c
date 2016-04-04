
Ext.define("iBOSe.view.home.HomeView",{
	
    extend: "Ext.grid.Panel",
    xtype: 'homeview',
    
    requires: [
        "iBOSe.view.home.HomeViewController",
        "iBOSe.view.home.HomeViewModel",
        "iBOSe.store.HomeStore",
        "iBOSe.model.HomeModel"
    ],

    controller: "home-homeview",
    viewModel: {
        type: "home-homeview"
    },
    
    padding: '0 0 20 0',
    width: '100%',
    store: {
    	type: 'homestore'
    },
    
    columns: [{ 
    	text: 'Subject', 
    	dataIndex: 'subject',
    	flex: 1
    }, { 
    	text: 'Message', 
    	dataIndex: 'messagebody', 
    	flex: 3
    }, { 
    	text: 'Received', 
    	dataIndex: 'datereceived' 
    }],
    
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
        	xtype: 'button',
        	text: 'Sign out'
        },'->',
        {
        	xtype: 'displayfield',
        	bind: {
        		value: '<p title="{companyname}">{fullname}</p>'
        	}
        },
        ' ',
        {
        	xtype: 'displayfield',
        	bind: {
        		value: '{profileimage}'
        	}
        },
        ' ',
        ' ']
    }],
    
    listeners: {
    	render: 'onHomeRender'
    }
   
});
