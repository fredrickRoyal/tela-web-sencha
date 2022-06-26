Ext.define("Tela.view.systemAdministration.users.UsersListgrid", {
    extend: 'Ext.grid.Grid',
    xtype: 'usersListgrid',
    requires: [
        //'Ext.grid.plugin.filterbar.FilterBar'
        'Ext.grid.plugin.Clipboard'
    ],
    height: '100%',
    store: { type: 'user' },
    width: '100%',
    multiColumnSort: true,
    scrollable: true,
    sortable: true,
    rowNumbers: true,
    //pageSize: 3,
    selectable: {
        columns: true, // Can select cells and rows, but not columns
        extensible: true, // Uses the draggable selection extender 
        cells: true,
        checkbox: true,
        drag: true,
        extensible: 'y'
    },
    plugins: {
        pagingtoolbar: true,
        //gridfilterbar: true
        clipboard: true,
        selectionreplicator: true
    },
    listeners: {
        selectionchange: 'onSelectionChange'
    },
    columns: [{
            text: 'id',
            dataIndex: 'id',
            flex: 1,
            hidden: true
        }, {
            text: 'UserName',
            dataIndex: 'userName',
            flex: 1,
            filterType: 'string'
        },

        {
            text: 'First Name',
            dataIndex: 'firstName',
            flex: 1,
            filterType: 'string'

        },
        {
            text: 'Last Name',
            dataIndex: 'lastName',
            flex: 1,
            filterType: 'string'
        },
        {
            text: 'Phone Number',
            dataIndex: 'phoneNumber',
            flex: 1,
            filterType: 'string'
        },
        {
            text: 'Email',
            dataIndex: 'email',
            flex: 1,
            filterType: 'string'
        },

        {
            text: 'User Group',
            dataIndex: 'name',
            flex: 1,
            filterType: 'string'

        },

        {
            width: 70,
            hideable: false,

            cell: {
                tools: {
                    approve: {
                        iconCls: 'x-fa fa-check green',
                        handler: 'onApprove'
                    },
                    decline: {
                        iconCls: 'x-fa fa-ban red',
                        handler: 'onDecline',
                        weight: 1
                    }
                }
            }
        }
    ],

    signTpl: '<span style="' +
        'color:{value:sign("${red}", "${green}")}"' +
        '>{text}</span>'

});