
Ext.define("iBOSe.view.dashboard.DashboardView",{
    extend: "Ext.grid.Panel",
    xtype: 'dashboardview',
    requires: [
        "iBOSe.view.dashboard.DashboardViewController",
        "iBOSe.view.dashboard.DashboardViewModel"
    ],

    controller: "dashboard-dashboardview",
    viewModel: {
        type: "dashboard-dashboardview"
    },

    title: 'Dashboard',
    store: {
    	type: 'dashboardstore'
    },
    
    columns: [{ 
    	text: 'Title', 
    	dataIndex: 'dashboardname', 
    	flex: 1 
    },{ 
    	text: 'Group', 
    	dataIndex: 'dashboardgroup',
    	hidden: true,
    	flex: 1
    }]
});
