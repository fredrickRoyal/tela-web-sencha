Ext.define("Tela.model.Subject", {
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
            name: "categoryId",
            mapping:"subjectCategory.id"
        },
        {
            name: "category",
            mapping:"subjectCategory.name"
        },
    ],
    // proxy: {
    //     type: 'rest',
    //     url: 'http://localhost:9000/needsAnalysis'
    // }
});