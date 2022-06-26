Ext.define("Tela.view.main.MainViewModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.mainviewmodel",
    data: {
        name: "Tela",
        navCollapsed: false,
        navview_max_width: 250,
        navview_min_width: 44,
        topview_height: 75,
        bottomview_height: 50,
        headerview_height: 50,
        footerview_height: 50,
        detailCollapsed: true,
        detailview_width: 10,
        detailview_max_width: 300,
        detailview_min_width: 0,
    },
    formulas: {
        navview_width: function(get) {
            return get("navCollapsed") ?
                get("navview_min_width") :
                get("navview_max_width");
        },
        detailview_width: function(get) {
            return get("detailCollapsed") ?
                get("detailview_min_width") :
                get("detailview_max_width");
        },
    },
    stores: {
        menu: {
            type: "tree",
            rootVisible: true,
            root: {
                expanded: true,
                text: "All",
                iconCls: "x-fa fa-sitemap",
                children: [{
                        text: "Dashboard",
                        iconCls: "x-fa fa-chart-pie",
                        children: [{
                                text: "Overall Performance",
                                iconCls: "x-fa fa-chart-bar",
                                xtype: "homeview",
                                leaf: true,
                            },
                            {
                                text: "Daily Attendance Summary",
                                iconCls: "x-fa fa-chart-line",
                                leaf: true,
                            },
                        ],
                    },
                    {
                        text: "System Administration",
                        iconCls: "x-fa fa-tools",
                        children: [{
                                text: "System Users",
                                iconCls: "x-fa fa-user",
                                xtype: "usersView",
                                leaf: true,
                            },
                            {
                                text: "Assessment Periods",
                                iconCls: "x-fa fa-sliders-h",
                                xtype: "assementPeriodView",
                                leaf: true,
                            },
                            {
                                text: "Administrative Areas",
                                iconCls: "x-fa fa-location-arrow",
                                xtype:"administativeAreaView",
                                leaf: true,
                            },
                            {
                                text: "Subjects",
                                iconCls: "x-fa fa-book-reader",
                                xtype:"subjectView",
                                leaf: true,
                            },
                            {
                                text: "Audit Trail",
                                iconCls: "x-fa fa-file-alt",
                                leaf: true,
                            },
                        ],
                    },

                    {
                        text: "Enrollment",
                        iconCls: "x-fa fa-book-open",
                        children: [{
                                text: "School Registration",
                                iconCls: "x-fa fa-school",
                                xtype: "homeview",
                                leaf: true,
                            },
                            {
                                text: "Learners Head Count",
                                iconCls: "x-fa fa-school",
                                leaf: true,
                            },
                            {
                                text: "Staff",
                                iconCls: "x-fa fa-chalkboard-teacher",
                                leaf: true,
                            },
                        ],
                    },
                    {
                        text: "Timetable & Scheduling",
                        iconCls: "x-fa fa-business-time",
                        children: [{
                                text: "School Timetables",
                                iconCls: "x-fa fa-calendar-alt",
                                xtype: "homeview",
                                leaf: true,
                            },
                            {
                                text: "Duty Roasters",
                                iconCls: "x-fa fa-calendar-check",
                                leaf: true,
                            },
                        ],
                    },
                    {
                        text: "Attendance",
                        iconCls: "x-fa fa-clock",
                        children: [{
                                text: "Learner",
                                iconCls: "x-fa fa-users",
                                xtype: "homeview",
                                leaf: true,
                            },
                            {
                                text: "Staff",
                                iconCls: "x-fa fa-user-check",
                                leaf: true,
                            },
                            {
                                text: "SMC",
                                iconCls: "x-fa fa-walking",
                                leaf: true,
                            },
                        ],
                    },
                    {
                        text: "Supervision",
                        iconCls: "x-fa fa-glasses",
                        children: [{
                                text: "Time Attendance",
                                iconCls: "x-fa fa-business-time",
                                xtype: "homeview",
                                leaf: true,
                            },
                            {
                                text: "Task Attendance",
                                iconCls: "x-fa fa-clipboard-tasks",
                                leaf: true,
                            },
                            {
                                text: "SMC Supervision",
                                iconCls: "x-fa fa-drum",
                                leaf: true,
                            },
                        ],
                    },

                    {
                        text: "Performance Reports",
                        iconCls: "x-fa fa-database",
                        children: [{
                                text: "School Performance",
                                iconCls: "x-fa fa-building",
                                xtype: "homeview",
                                leaf: true,
                            },
                            {
                                text: "District Performance",
                                iconCls: "x-fa fa-chair",
                                leaf: true,
                            },
                            {
                                text: "National Performance",
                                iconCls: "x-fa fa-chess-queen",
                                leaf: true,
                            },
                        ],
                    },

                    {
                        text: "Approvals",
                        iconCls: "x-fa fa-check-square",
                        xtype: "personnelview",
                        leaf: true,
                    },

                    {
                        text: "Personnel",
                        iconCls: "x-fa fa-table",
                        xtype: "personnelview",
                        leaf: true,
                    },
                    //add new items on the next line (from sencha-node generate viewpackage)
                ],
            },
        },
    },
});