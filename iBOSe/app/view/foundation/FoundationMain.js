
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
