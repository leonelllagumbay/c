
Ext.define("iBOSe.view.foundation.FoundationPhysicalFields",{
    extend: "Ext.grid.Panel",
    xtype: "ibosephysicalfields",
    requires: [
        "iBOSe.view.foundation.FoundationPhysicalFieldsController",
        "iBOSe.view.foundation.FoundationPhysicalFieldsModel"
    ],

    controller: "foundation-foundationphysicalfields",
    viewModel: {
        type: "foundation-foundationphysicalfields"
    },
    title: "Physical Fields",

    html: "Hello, World!! Physical fields"
});
