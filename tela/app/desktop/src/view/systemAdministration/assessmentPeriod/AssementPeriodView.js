Ext.define("Tela.view.systemAdministration.assessmentPeriod.AssementPeriodView", {
    extend: 'Ext.Container',
    xtype: 'assementPeriodView',
    cls: 'assementPeriodView',
    controller: { type: 'assementPeriodViewController' },
    //viewModel: { type: 'assessmentviewmodel' }, 
    requires: ["Ext.tab.Panel", "Ext.layout.overflow.Scroller"],
    scrollable: false,
    items: [{
        xtype: "tabpanel",
        reference: "tabpanel",
        id: "tabpanel",
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
        items: [{
                title: "Academic Years",
                layout: "center",
                cls: "card",
                xtype: 'academicYearListgrid',
                reference: "academicYearListgrid",
            },
            {
                title: "Acadamic Terms",
                //layout: "center",
                //cls: "card",
                reference: "academicTermListgrid",
                xtype: "academicTermListgrid",
            },
            {
                title: "Semesters",
                layout: "center",
                cls: "card",
                //xtype: 'subsectorGrid',
                //reference: "subsectorGrid",
            },

        ],
    }, ],
});