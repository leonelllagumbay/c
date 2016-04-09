
Ext.define("iBOSe.view.foundation.FoundationMain",{
    extend: "Ext.tab.Panel",
    xtype: 'ibosecoremodel',
    requires: [
        "iBOSe.view.foundation.FoundationMainController",
        "iBOSe.view.foundation.FoundationMainModel"
    ],

    controller: "foundation-foundationmain",
    viewModel: {
        type: "foundation-foundationmain"
    },

    collapsible: true,
    closable: true,
    
    /*dockedItems: [{
        xtype: 'button',
        text: 'Add',
        dock: 'top'
    },],*/
    tbar: [{
    	text: 'Add'
    },{
    	text: 'Edit'
    },{
    	text: 'Copy'
    },{
    	text: 'Remove'
    },{
    	text: 'Write'
    },{
    	text: 'Rebuild'
    },{
    	text: 'Erase'
    },{
    	text: 'Import'
    },{
    	text: 'Export'
    },{
    	text: 'Generate'
    },{
    	text: 'Init Data'
    },{
    	text: 'Restore'
    },{
    	text: 'Backup'
    },{
    	text: 'Save State'
    },{
    	text: 'Apply State'
    }],
    
    items: [{
        xtype: "ibosefoundation"
    },{
        xtype: "ibosemodelfields"
    },{
    	xtype: "ibosephysicalfields"
    },{
    	xtype: "ibosemodeldata"
    }]
});
