Ext.define('iBOSe.model.FoundationModelFieldsModel', {
	extend: 'Ext.data.Model',
	fields: [{ 
		name: 'MMODELFIELDS',
		type: 'int'
	},{
		name: 'FK_MMODEL',
		type: 'string'
	},{  
		name: 'MLENGTH',
		type: 'int'
	},{
		name: 'MFIELDTYPE',
		type: 'string'
	},{
		name: 'MORMTYPE',
		type: 'string'
	},{
		name: 'MGENERATOR',
		type: 'string'
	},{
		name: 'MCOLUMN',
		type: 'string'
	},{
		name: 'MFKCOLUMN',
		type: 'string'
	},{
		name: 'MCFC',
		type: 'string'
	},{
		name: 'MCASCADE',
		type: 'string'
	},{
		name: 'MSINGULARNAME',
		type: 'string'
	},{
		name: 'MNOTNULL',
		type: 'string'
	},{
		name: 'MINVERSEJOINCOLUMN',
		type: 'string'
	},{
		name: 'MTYPE',
		type: 'string'
	},{
		name: 'MDEFAULT',
		type: 'string'
	},{
		name: 'MPRECISION',
		type: 'string'
	},{
		name: 'MINVERSE',
		type: 'string'
	},{
		name: 'MDESCRIPTION',
		type: 'string'
	},{
		name: 'MDISPLAYNAME',
		type: 'string'
	},{
		name: 'MDATECREATED',
		type: 'date'
	},{
		name: 'MDATEUPDATED',
		type: 'date'
	},{
		name: 'MEXTRAPROP',
		type: 'string'
	}]  
});