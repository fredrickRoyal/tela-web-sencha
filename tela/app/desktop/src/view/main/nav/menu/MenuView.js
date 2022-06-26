Ext.define('Tela.view.nav.menu.MenuView', {
    extend: 'Ext.list.Tree',
    xtype: 'menuview',
    viewModel: {},
    ui: 'nav',
    requires: [
        'Ext.data.TreeStore',
    ],
    scrollable: true,
    //bodyPadding: 20,
    bind: {
        store: '{menu}',
        micro: '{navCollapsed}'
    },
    expanderFirst: false,
    expanderOnly: false
});