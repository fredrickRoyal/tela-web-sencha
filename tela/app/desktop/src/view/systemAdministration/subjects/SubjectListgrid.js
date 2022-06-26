Ext.define("Tela.view.systemAdministration.subjects.SubjectListgrid", {
    extend: 'Ext.grid.Grid',
    xtype: 'subjectListgrid',
    requires: [
        //'Ext.grid.plugin.filterbar.FilterBar'
        'Ext.grid.plugin.Clipboard'
    ],
    height: '100%',
    store: { type: 'subject' },
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
            text: 'Subject',
            dataIndex: 'name',
            flex: 1,
            filterType: 'string'
        }, 

        {
            text: 'Category Id',
            dataIndex: 'categoryId',
            flex: 1,
            filterType: 'string',
            hidden:true,

        },
        
        {
            text: 'Category',
            dataIndex: 'category',
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