Ext.define("Tela.model.User", {
    extend: "Tela.model.Base",
    fields: [{
            name: "id"
        },
        {
            name: "userName",
            mapping: "systemUserDTO.userName"
        },
        {
            name: "firstName",
            mapping: "generalUserDetailDTO.firstName"
        },
        {

            name: "lastName",
            mapping: "generalUserDetailDTO.lastName"

        },
        {

            name: "phoneNumber",
            mapping: "generalUserDetailDTO.phoneNumber"

        },
        {

            name: "email",
            mapping: "generalUserDetailDTO.email"

        },
    ],
    // proxy: {
    //     type: 'rest',
    //     url: 'http://localhost:9000/needsAnalysis'
    // }
});