
Ext.define("iBOSe.view.workspace.Workspace",{
    extend: "Ext.panel.Panel",
    xtype: 'iboseworkspace',
    requires: [
        "iBOSe.view.workspace.WorkspaceController",
        "iBOSe.view.workspace.WorkspaceModel"
    ],

    controller: "workspace-workspace",
    viewModel: {
        type: "workspace-workspace"
    },

    layout: {
        type: 'vbox'
    },
    
    items: []
    
});
