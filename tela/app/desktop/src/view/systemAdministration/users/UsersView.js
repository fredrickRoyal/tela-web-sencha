Ext.define("Tela.view.systemAdministration.users.UsersView", {
    extend: 'Ext.Container',
    xtype: 'usersView',
    cls: 'usersView',
    controller: { type: 'usersViewController' },
    //viewModel: { type: 'assessmentviewmodel' }, 
    requires: [

    ],
    scrollable: false,
    items: [

        {
            reference: 'usersListgrid',
            xtype: 'usersListgrid',
        }

    ]
});