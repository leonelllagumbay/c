
Ext.define("iBOSe.view.foundation.Foundation",{
    extend: "Ext.grid.Panel",
    xtype: "ibosefoundation",
    requires: [
        "iBOSe.view.foundation.FoundationController",
        "iBOSe.view.foundation.FoundationModel",
        "iBOSe.store.FoundationStore",
        "iBOSe.model.FoundationModel"
    ],

    controller: "foundation-foundation",
    viewModel: { 
        type: "foundation-foundation"
    },
    
    store: {
        type: 'ibosefoundationstore'
    },

    title: 'Core Model Manager',

    border: true,
    plugins: [{
		ptype: 'gridfilters'
	}],
    
	useArrows: true,
    rootVisible: true,

    padding: '0 0 20 0',

    columns: [{
        xtype: 'treecolumn', //this is so we know which column will show the tree
        text: 'Model',
        width: 500,
        sortable: false,
        dataIndex: 'MMODEL',
        filter: {
            type: 'string'
        },
        locked: true
    },{
        text: 'Parent Model',
        width: 150,
        sortable: false,
        filter: {
            type: 'string'
        },
        dataIndex: 'MPARENTMODEL'
    },{
        text: 'Database',
        sortable: false,
        width: 150,
        dataIndex: 'MDATABASENAME'
    },{
    	text: 'Table',
    	sortable: false,
        dataIndex: 'MTABLENAME',
        width: 150
    }]
});
