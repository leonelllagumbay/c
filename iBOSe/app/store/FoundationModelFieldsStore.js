
Ext.define('iBOSe.view.foundation.FoundationModelFieldsStore', {
	extend: 'Ext.data.Store',
	alias: 'store.foundationmodelfieldsstore',
	model: 'iBOSe.model.FoundationModelFieldsModel',

	remoteFilter: true,
	remoteSort: true,

	sorters: [{
            property: 'MDATEUPDATED',
            direction: 'DESC'
    }],
	filters: [{
			property: 'MCOLUMN',
            operator: 'like',
            value: ''
	}],
	
	pageSize: 30,
	autoSave: true,
	autoLoad: true,
	autoSync: true,
	
    proxy: {
		type: 'direct',
		timeout: 300000,
		filterParam: 'filter',
		sortParam: 'sort',
		limitParam: 'limit',
		idParam: 'ID',
		pageParam: 'page',

		extraParams: {
			args: {}
		},
		paramOrder: ['page', 'start', 'limit', 'sort', 'filter', 'args'],
		api: {
			read:    Ext.administrator.Coremodel.ReadModelFields,
	        create:  Ext.administrator.Coremodel.CreateModel,  
	        update:  Ext.administrator.Coremodel.UpdateModel,
	        destroy: Ext.administrator.Coremodel.DestroyModel
	    },
		
		reader: {
			type: 'json',
            rootProperty: 'topics',
            totalProperty: 'totalCount'
        }
	}
	   
});
