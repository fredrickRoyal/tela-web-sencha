Ext.define("Tela.view.systemAdministration.users.UsersViewModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.subSectorViewModel", // connects to viewModel/type below
    data: {
        id: "",
        userName: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        userRole: "",
        userGroup: "",
    },
});