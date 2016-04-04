Ext.define('iBOSe.model.HomeModel', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'subject',
		type: 'string'
	},{
		name: 'messagebody',
		type: 'string'
	},{
		name: 'datereceived',
		type: 'date'
	}]
});