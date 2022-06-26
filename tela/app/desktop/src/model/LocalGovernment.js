Ext.define("Tela.model.LocalGovernment", {
    extend: "Tela.model.Base",
    fields: [{
            name: "id"
        },
        {
            name: "code",
        },
        {
            name: "name",
        },
        {
            name: "rolledOut",
        },
        {
            name: "regionId",
            mapping:"region.id"
        },
        {
            name: "region",
            mapping:"region.name"
        },
    ],
    // proxy: {
    //     type: 'rest',
    //     url: 'http://localhost:9000/needsAnalysis'
    // }
});