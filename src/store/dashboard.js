const namespaced = true;

const state = {
    indicadores: [
        {
            title: {
                name: "Calidad",
                icon: {
                    name: "mdi-thumb-up",
                    color: "",
                    container: "",
                },
            },
            content: {
                value: "100%",
                style: ["text-h1", "font-weight-bold"],
                chart: {
                    type: "Pie",
                    chartData: {
                        labels: ["January", "February", "March"],
                        datasets: [{ data: [40, 20, 12] }],
                    },
                    chartOptions: {
                        responsive: true,
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
                    },
                },
            },
            cols: 6,
            color: "#FEF4E1",
            dark: false,
            bottom_detail: [
                {
                    text: "Total",
                    value: 605,
                },
                {
                    text: "Válidas",
                    value: 602,
                },
                {
                    text: "SNC",
                    value: 3,
                },
                {
                    text: "Rechazadas",
                    value: 0,
                },
            ],
        },
        {
            title: {
                name: "Eficacia",
                icon: {
                    name: "mdi-book-clock",
                    color: "",
                    container: "",
                },
            },
            content: {
                value: "90%",
                style: ["text-h1", "font-weight-bold"],
                chart: {
                    type: "Bar",
                    chartData: {
                        labels: ["January", "February", "March"],
                        datasets: [
                            {
                                data: [300, 50, 100],
                                backgroundColor: [
                                    "rgb(255, 99, 132)",
                                    "rgb(54, 162, 235)",
                                    "rgb(255, 205, 86)",
                                ],
                            },
                        ],
                    },
                    chartOptions: {
                        responsive: true,
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
                        scales: {
                            y: {
                                display: false,
                            },
                            x: {
                                display: false,
                            },
                        },
                    },
                },
            },
            cols: 6,
            color: "#FBF3EF",
        },
        {
            title: {
                name: "Satisfacción",
                icon: {
                    name: "mdi-check-decagram",
                    color: "",
                    container: "",
                },
            },
            content: {
                value: "50%",
                style: ["text-h2", "font-weight-bold"],
                chart: {
                    type: "Doughnut",
                    chartData: {
                        labels: ["January", "February", "March"],
                        datasets: [
                            {
                                label: "My First Dataset",
                                data: [300, 50, 100],
                                backgroundColor: [
                                    "rgb(255, 99, 132)",
                                    "rgb(54, 162, 235)",
                                    "rgb(255, 205, 86)",
                                ],
                                hoverOffset: 4,
                            },
                        ],
                    },
                    chartOptions: {
                        responsive: true,
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
                    },
                },
            },
            cols: 4,
            color: "#FAFAFA",
        },
        {
            title: {
                name: "Acciones",
                icon: {
                    name: "mdi-flash",
                    color: "",
                    container: "",
                },
            },
            content: {
                value: "50%",
                style: ["text-h2", "font-weight-bold"],
                chart: {
                    type: "Pie",
                    chartData: {
                        labels: ["January", "February", "March"],
                        datasets: [
                            {
                                label: "My First Dataset",
                                data: [300, 50, 100],
                                backgroundColor: [
                                    "rgb(255, 99, 132)",
                                    "rgb(54, 162, 235)",
                                    "rgb(255, 205, 86)",
                                ],
                                hoverOffset: 4,
                            },
                        ],
                    },
                    chartOptions: {
                        responsive: true,
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
                    },
                },
            },
            cols: 4,
            color: "#FAFAFA",
        },
        {
            title: {
                name: "Quejas",
                icon: {
                    name: "mdi-thumb-down",
                    color: "",
                    container: "",
                },
            },
            content: {
                value: "50%",
                style: ["text-h2", "font-weight-bold"],
                chart: {
                    type: "Pie",
                    chartData: {
                        labels: ["January", "February", "March"],
                        datasets: [
                            {
                                label: "My First Dataset",
                                data: [300, 50, 100],
                                backgroundColor: [
                                    "rgb(255, 99, 132)",
                                    "rgb(54, 162, 235)",
                                    "rgb(255, 205, 86)",
                                ],
                                hoverOffset: 4,
                            },
                        ],
                    },
                    chartOptions: {
                        responsive: true,
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
                    },
                },
            },
            cols: 4,
            color: "#FAFAFA",
        },
    ],
};

const mutations = {};

const actions = {};

export default {
    namespaced,
    state,
    mutations,
    actions,
};
