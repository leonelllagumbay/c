Ext.define('iBOSe.model.FoundationModel', {
	extend: 'Ext.data.TreeModel',
	fields: [{
		name: 'MMODEL',
		type: 'string'
	},{
		name: 'MPARENTMODEL',
		type: 'string'
	},{
		name: 'MDATABASENAME',
		type: 'string'
	},{
		name: 'MTABLENAME',
		type: 'string'
	}]  
});