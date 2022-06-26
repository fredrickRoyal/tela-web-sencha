Ext.define("Tela.view.systemAdministration.assessmentPeriod.AssementPeriodViewController", {
    extend: "Ext.app.ViewController",
    alias: "controller.assementPeriodViewController",
    xtype: "assementPeriodViewController",
    onNew: function() {

        var form = Ext.create('NARS.view.assessment.AssessmentForm');
        form.show();

        // Ext.Msg.alert("Login Success", "You have been logged in!");

        // var view = this.getView(),
        //     dialog = this.dialog;

        // if (!dialog) {
        //     dialog = Ext.apply({
        //         ownerCmp: view
        //     }, view.dialog);

        //     this.dialog = dialog = Ext.create(dialog);
        // }


    },
});