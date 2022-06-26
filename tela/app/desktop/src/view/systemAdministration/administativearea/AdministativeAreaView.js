Ext.define("Tela.view.systemAdministration.administativearea.AdministativeAreaView", {
    extend: 'Ext.Container',
    xtype: 'administativeAreaView',
    cls: 'administativeAreaView',
    controller: { type: 'administativeAreaViewController' },
    //viewModel: { type: 'assessmentviewmodel' }, 
    requires: ["Ext.tab.Panel", "Ext.layout.overflow.Scroller"],
    scrollable: false,
    items: [{
        xtype: "tabpanel",
        reference: "tabpanel",
        id: "administrativeAreaTabpanel",
        defaultType: 'panel',
        shadow: "true",
        tabBar: {
            layout: {
                pack: "start",
                overflow: "scroller",
            },
        },

        defaults: {
            bodyPadding: 15
        },
        height: '100%',
        items: [ 
            {
                title: "Local Government",
                //layout: "center",
               // cls: "card",
                xtype: 'localGovernmentListgrid',
                reference: "localGovernmentListgrid",
            },

            {
                title: "Regions",
                //layout: "center",
                //cls: "card",
                reference: "regionListgrid",
                xtype: "regionListgrid",
            },
             
            {
                title: "Subcounties",
                //layout: "center",
                //cls: "card",
                //xtype: 'subsectorGrid',
                //reference: "subsectorGrid",
            },

        ],
    }, ],
});