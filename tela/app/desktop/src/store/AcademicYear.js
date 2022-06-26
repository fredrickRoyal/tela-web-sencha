Ext.define("Tela.store.AcademicYear", {
    extend: "Ext.data.Store",
    alias: "store.academicYear",
    model: "Tela.model.AcademicYear",
    data: {

        "message": "years",
        "data": [{
                "id": "1",
                "createdDateTime": "24/04/2021 10:24:02",
                "updatedDateTime": "24/04/2021 10:24:02",
                "status": "ACTIVE",
                "code": "2020",
                "name": "2020",
                "activationStatus": "Active",
                "startDate": null,
                "endDate": null
            },
            {
                "id": "2c9180827e293d41017e2ae3d8ce00c4",
                "createdDateTime": "05/01/2022 18:38:01",
                "updatedDateTime": "05/01/2022 18:38:01",
                "status": "ACTIVE",
                "code": "2022",
                "name": "2022",
                "activationStatus": "Active",
                "startDate": "10/01/2022",
                "endDate": "09/12/2022"
            },
            {
                "id": "8a0080826850ecd3016850f94c890001",
                "createdDateTime": "24/04/2021 10:24:02",
                "updatedDateTime": "05/05/2021 17:47:50",
                "status": "ACTIVE",
                "code": "2019",
                "name": "2019",
                "activationStatus": "In Active",
                "startDate": "05/05/2021",
                "endDate": "05/05/2021"
            },
            {
                "id": "ff808081643f712801643f7328f30001",
                "createdDateTime": "24/04/2021 10:24:02",
                "updatedDateTime": "24/04/2021 10:24:02",
                "status": "ACTIVE",
                "code": "2017",
                "name": "2017",
                "activationStatus": "In Active",
                "startDate": null,
                "endDate": null
            },
            {
                "id": "ff808081643f712801643f73538e0002",
                "createdDateTime": "24/04/2021 10:24:02",
                "updatedDateTime": "24/04/2021 10:24:02",
                "status": "ACTIVE",
                "code": "2018",
                "name": "2018",
                "activationStatus": "In Active",
                "startDate": null,
                "endDate": null
            }
        ],
        "status": true

    },
    proxy: {
        type: 'memory',
        //type: 'ajax',
        url: 'http://localhost:9000/needsAnalysis',
        method: 'GET',
        reader: {
            type: "json",
            rootProperty: "data",
        },
    },
    //expandData: true,
    autoLoad: true
});