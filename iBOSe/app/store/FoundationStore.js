
Ext.define('iBOSe.store.FoundationStore', {
	extend: 'Ext.data.TreeStore',
	alias: 'store.ibosefoundationstore',
	model: 'iBOSe.model.FoundationModel',

	defaultRootProperty: 'children',
	defaultRootText: 'root',
	defaultSortDirection: 'ASC',
	
	autoLoad: true,
	
	remoteFilter: true,

	rootVisible: true,
	
	proxy: {
		type: 'direct',
		timeout: 300000,
		extraParams: {
			dquery: '',
			dorder: '',
			dorderdirection: ''
		},
		paramOrder: ['dquery','dorder','dorderdirection'],
		api: {
	        read:    Ext.administrator.Coremodel.ReadModel,
	        create:  Ext.administrator.Coremodel.CreateModel,  
	        update:  Ext.administrator.Coremodel.UpdateModel,
	        destroy: Ext.administrator.Coremodel.DestroyModel
	    },

		reader: {
			type: 'json',
            rootProperty: 'children'
        }
	}
	
});
