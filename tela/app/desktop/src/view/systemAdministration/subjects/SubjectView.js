Ext.define("Tela.view.systemAdministration.subjects.SubjectView", {
    extend: 'Ext.Container',
    xtype: 'subjectView',
    cls: 'subjectView',
    controller: { type: 'subjectViewController' },
    //viewModel: { type: 'assessmentviewmodel' }, 
    requires: ["Ext.tab.Panel", "Ext.layout.overflow.Scroller"],
    scrollable: false,
    items: [{
        xtype: "tabpanel",
        reference: "tabpanel",
        id: "subjectTabpanel",
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
                title: "Subjects",
                //layout: "center",
               // cls: "card",
                xtype: 'subjectListgrid',
                reference: "subjectListgrid",
            },

            {
                title: "Categories",
                //layout: "center",
                //cls: "card",
                //reference: "regionListgrid",
                //xtype: "regionListgrid",
            }, 

        ],
    }, ],
});