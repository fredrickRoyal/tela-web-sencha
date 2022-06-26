Ext.define("Tela.model.AcademicYear", {
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

            name: "startDate",

        },
        {

            name: "endDate",

        },
        {

            name: "activationStatus",

        },
    ],
    // proxy: {
    //     type: 'rest',
    //     url: 'http://localhost:9000/needsAnalysis'
    // }
});