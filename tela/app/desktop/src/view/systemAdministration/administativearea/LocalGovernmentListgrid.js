Ext.define("Tela.view.systemAdministration.administativearea.LocalGovernmentListgrid", {
    extend: 'Ext.grid.Grid',
    xtype: 'localGovernmentListgrid',
    requires: [
        //'Ext.grid.plugin.filterbar.FilterBar'
        'Ext.grid.plugin.Clipboard'
    ],
    height: '100%',
    store: { type: 'localGovernment' },
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
            text: 'Code',
            dataIndex: 'code',
            flex: 1,
            filterType: 'string'
        },
        {
            text: 'Local Government',
            dataIndex: 'name',
            flex: 1,
            filterType: 'string'
        },

        {
            text: 'Rolled Out',
            dataIndex: 'rolledOut',
            flex: 1,
            filterType: 'string'
        },

        {
            text: 'Region Id',
            dataIndex: 'regionId',
            flex: 1,
            filterType: 'string',
            hidden:true,

        },
        
        {
            text: 'Region',
            dataIndex: 'region',
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