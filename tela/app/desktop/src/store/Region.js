Ext.define("Tela.store.Region", {
    extend: "Ext.data.Store",
    alias: "store.region",
    model: "Tela.model.Region",
    data: {
    "message": "Regions",
    "data": [
        {
            "id": "8a0080826522e0f601652ef1b57e001a",
            "createdDateTime": "24/04/2021 10:24:02",
            "updatedDateTime": "28/04/2021 12:56:52",
            "status": "ACTIVE",
            "code": "15",
            "name": "Kampala"
        },
        {
            "id": "ff8081817917a26a017917e48dc40015",
            "createdDateTime": "28/04/2021 12:51:56",
            "updatedDateTime": "28/04/2021 12:51:56",
            "status": "ACTIVE",
            "code": "1",
            "name": "Buganda North"
        },
        {
            "id": "ff8081817917a26a017917e4df740016",
            "createdDateTime": "28/04/2021 12:52:19",
            "updatedDateTime": "28/04/2021 12:52:19",
            "status": "ACTIVE",
            "code": "2",
            "name": "Lango"
        },
        {
            "id": "ff8081817917a26a017917e550af0017",
            "createdDateTime": "28/04/2021 12:52:48",
            "updatedDateTime": "28/04/2021 12:52:48",
            "status": "ACTIVE",
            "code": "3",
            "name": "Bukedi"
        },
        {
            "id": "ff8081817917a26a017917e5886e0018",
            "createdDateTime": "28/04/2021 12:53:06",
            "updatedDateTime": "28/04/2021 12:53:06",
            "status": "ACTIVE",
            "code": "4",
            "name": "Ankole"
        },
        {
            "id": "ff8081817917a26a017917e5ee990019",
            "createdDateTime": "28/04/2021 12:53:33",
            "updatedDateTime": "28/04/2021 12:53:33",
            "status": "ACTIVE",
            "code": "5",
            "name": "Busoga"
        },
        {
            "id": "ff8081817917a26a017917e627e5001a",
            "createdDateTime": "28/04/2021 12:53:46",
            "updatedDateTime": "28/04/2021 12:53:46",
            "status": "ACTIVE",
            "code": "6",
            "name": "Karamoja"
        },
        {
            "id": "ff8081817917a26a017917e69667001b",
            "createdDateTime": "28/04/2021 12:54:16",
            "updatedDateTime": "28/04/2021 12:54:16",
            "status": "ACTIVE",
            "code": "7",
            "name": "Kigezi"
        },
        {
            "id": "ff8081817917a26a017917e6e09f001c",
            "createdDateTime": "28/04/2021 12:54:34",
            "updatedDateTime": "28/04/2021 12:54:34",
            "status": "ACTIVE",
            "code": "8",
            "name": "Toro"
        },
        {
            "id": "ff8081817917a26a017917e709e3001d",
            "createdDateTime": "28/04/2021 12:54:46",
            "updatedDateTime": "28/04/2021 12:54:46",
            "status": "ACTIVE",
            "code": "9",
            "name": "Teso"
        },
        {
            "id": "ff8081817917a26a017917e7438b001e",
            "createdDateTime": "28/04/2021 12:54:58",
            "updatedDateTime": "28/04/2021 12:54:58",
            "status": "ACTIVE",
            "code": "10",
            "name": "Acholi"
        },
        {
            "id": "ff8081817917a26a017917e76692001f",
            "createdDateTime": "28/04/2021 12:55:10",
            "updatedDateTime": "28/04/2021 12:55:10",
            "status": "ACTIVE",
            "code": "11",
            "name": "Elgon"
        },
        {
            "id": "ff8081817917a26a017917e790420020",
            "createdDateTime": "28/04/2021 12:55:20",
            "updatedDateTime": "28/04/2021 12:55:20",
            "status": "ACTIVE",
            "code": "12",
            "name": "West Nile"
        },
        {
            "id": "ff8081817917a26a017917e7b77e0021",
            "createdDateTime": "28/04/2021 12:55:30",
            "updatedDateTime": "28/04/2021 12:55:30",
            "status": "ACTIVE",
            "code": "13",
            "name": "Bunyoro"
        },
        {
            "id": "ff8081817917a26a017917e836e20022",
            "createdDateTime": "28/04/2021 12:56:03",
            "updatedDateTime": "28/04/2021 12:56:03",
            "status": "ACTIVE",
            "code": "14",
            "name": "Buganda South"
        }
    ],
    "status": true
    },
    proxy: {
        type: "memory",
        //type: 'ajax',
        url: "http://localhost:9000/needsAnalysis",
        method: "GET",
        reader: {
            type: "json",
            rootProperty: "data",
        },
    },
    //expandData: true,
    autoLoad: true,
});