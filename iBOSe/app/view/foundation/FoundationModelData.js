
Ext.define("iBOSe.view.foundation.FoundationModelData",{
    extend: "Ext.grid.Panel",
    xtype: "ibosemodeldata",
    requires: [
        "iBOSe.view.foundation.FoundationModelDataController",
        "iBOSe.view.foundation.FoundationModelDataModel"
    ],

    controller: "foundation-foundationmodeldata",
    viewModel: {
        type: "foundation-foundationmodeldata"
    },
    title: "Model Data",

    html: "Hello, World!! Data"
});
