
Ext.define("iBOSe.view.-Ext.tab.Panel",{
    extend: "Ext.panel.Panel",

    requires: [
        "iBOSe.view.-Ext.tab.PanelController",
        "iBOSe.view.-Ext.tab.PanelModel"
    ],

    controller: "-ext-tab-panel",
    viewModel: {
        type: "-ext-tab-panel"
    },

    html: "Hello, World!!"
});
