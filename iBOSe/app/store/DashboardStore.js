Ext.define('iBOSe.store.DashboardStore', {
    extend: 'Ext.data.Store',

    alias: 'store.dashboardstore',

    fields: [
        'dashboardgroup', 'dashboardname'
    ],

    data: { 
    	items: [{ 
    		dashboardgroup: 'Managerial', 
    		dashboardname: "Employee Analysis"
    	},{ 
    		dashboardgroup: 'Managerial', 
    		dashboardname: "Google Analytics"
    	},{ 
    		dashboardgroup: 'Managerial', 
    		dashboardname: "My Performance"
    	}]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
