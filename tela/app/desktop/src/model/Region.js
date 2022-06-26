Ext.define("Tela.model.Region", {
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
    ],
    // proxy: {
    //     type: 'rest',
    //     url: 'http://localhost:9000/needsAnalysis'
    // }
});