Ext.define('iBOSe.store.HomeStore', {
    extend: 'Ext.data.Store',

    alias: 'store.homestore',
    model: 'iBOSe.model.HomeModel',

    data: { 
    	items: [{ 
    		subject: 'Open foundation', 
    		messagebody: "<a href='#workspace/ibosefoundation'>Go to model manager...</a>", 
    		datereceived: new Date()
    	},{ 
    		subject: 'Open settings', 
    		messagebody: "<a href='#workspace/ibosesettings'>Go to settings...</a>", 
    		datereceived: new Date()
    	},{ 
    		subject: 'My Calendar',  
    		messagebody: "jeanluc.picard@enterprise.com", 
    		datereceived: new Date()
    	},{ 
    		subject: 'Open Core Model', 
    		messagebody: "<a href='#workspace/ibosecoremodel'>Go to core...</a>", 
    		datereceived: new Date()
    	},{ 
    		subject: 'Jean Luc', 
    		messagebody: "jeanluc.picard@enterprise.com", 
    		datereceived: new Date()
    	}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
