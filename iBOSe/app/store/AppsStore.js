Ext.define('iBOSe.store.AppsStore', {
    extend: 'Ext.data.Store',

    alias: 'store.iboseappstore',

    fields: [
        'appgroup', 'appname'
    ],

    data: { 
    	items: [{ 
    		appgroup: 'KnowledgeWARE', 
    		appname: "<a href='#workspace/mycalendar'>My Calendar</a>"
    	},{ 
    		appgroup: 'KnowledgeWARE', 
    		appname: "<a href='#workspace/ibosereminder'>eReminders</a>"
    	},{ 
    		appgroup: 'KnowledgeWARE', 
    		appname: "<a href='#workspace/iboselogin'>Login</a>"
    	},{ 
    		appgroup: 'KnowledgeWARE', 
    		appname: "eNotes"
    	},{ 
    		appgroup: 'KnowledgeWARE', 
    		appname: "eGallery"
    	},{ 
    		appgroup: 'KnowledgeWARE', 
    		appname: "eRooms"
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
