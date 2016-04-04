
Ext.define("iBOSe.view.foundation.FoundationModelFields",{
    extend: "Ext.grid.Panel",
    xtype: 'ibosemodelfields',
    requires: [
        "iBOSe.view.foundation.FoundationModelFieldsController",
        "iBOSe.view.foundation.FoundationModelFieldsModel",
        "iBOSe.view.foundation.FoundationModelFieldsStore",
        "iBOSe.model.FoundationModelFieldsModel"
    ],

    controller: "foundation-foundationmodelfields",
    viewModel: {
        type: "foundation-foundationmodelfields"
    },
    title: "Model Field",
    border: true,
    height: 547,
    plugins: [{
		ptype: 'gridfilters'
	}],
	dockedItems: [{
        xtype: 'pagingtoolbar',
        store: {
            type: 'foundationmodelfieldsstore'
        },
        dock: 'bottom',
        displayInfo: true
    }],

    store: {
    	type: 'foundationmodelfieldsstore'
    },
    
    columns: [{
    	text: 'Model fields',
        dataIndex: 'MMODELFIELDS',
        width: 100,
        sortable: true
    },{
    	text: 'Fk column',
        dataIndex: 'FK_MMODEL',
        width: 150,
        sortable: true
    },{
    	text: 'Field type',
        dataIndex: 'MFIELDTYPE',
        filter: {
            type: 'string'
        },
        width: 150,
        sortable: true
    },{
    	text: 'ORM type',
        dataIndex: 'MORMTYPE',
        width: 150,
        sortable: true
    },{
    	text: 'Generator',
        dataIndex: 'MGENERATOR',
        width: 150,
        sortable: true
    },{
    	text: 'Column',
        dataIndex: 'MCOLUMN',
        width: 150,
        sortable: true
    },{
    	text: 'FK column',
        dataIndex: 'MFKCOLUMN',
        width: 150,
        sortable: true
    },{
    	text: 'Length',
        dataIndex: 'MLENGTH',
        width: 150,
        sortable: true
    },{
    	text: 'CFC',
        dataIndex: 'MCFC',
        width: 150,
        sortable: true
    },{
    	text: 'Cascade',
        dataIndex: 'MCASCADE',
        width: 150,
        sortable: true
    },{
    	text: 'Singular name',
        dataIndex: 'MSINGULARNAME',
        width: 150,
        sortable: true
    },{
    	text: 'Not Null',
        dataIndex: 'MNOTNULL',
        width: 150,
        sortable: true
    },{
    	text: 'Precision',
        dataIndex: 'MPRECISION',
        width: 150,
        sortable: true
    },{
    	text: 'Inverse',
        dataIndex: 'MINVERSE',
        width: 150,
        sortable: true
    },{
    	text: 'Inverse join column',
        dataIndex: 'MINVERSEJOINCOLUMN',
        width: 150,
        sortable: true
    },{
    	text: 'Description',
        dataIndex: 'MDESCRIPTION',
        width: 150,
        sortable: true
    },{
    	text: 'Display name',
        dataIndex: 'MDISPLAYNAME',
        width: 150,
        sortable: true
    },{
    	text: 'Type',
        dataIndex: 'MTYPE',
        width: 150,
        sortable: true
    },{
    	text: 'Default',
        dataIndex: 'MDEFAULT',
        width: 150,
        sortable: true
    },{
    	text: 'Extra',
        dataIndex: 'MEXTRAPROP',
        width: 150,
        sortable: true
    }]
});
