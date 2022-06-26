Ext.define("Tela.model.AcademicTerm", {
    extend: "Tela.model.Base",
    fields: [{
            name: "id"
        },
        {
            name: "code",
        },
        {
            name: "term",
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
        {

            name: "academicYearId",
            mapping: "academicYearDTO.id"

        },
        {

            name: "academicYear",
            mapping: "academicYearDTO.name"

        },
    ],
    // proxy: {
    //     type: 'rest',
    //     url: 'http://localhost:9000/needsAnalysis'
    // }
});