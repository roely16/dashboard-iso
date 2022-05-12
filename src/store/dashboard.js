import axios from "axios";

const namespaced = true;

const state = {
    header: null,
    indicadores: [],
    /*
    indicadores: [
        {
            cols: 6,
            color: "#FEF4E1",
            dark: false,
            title: {
                name: "Calidad",
                icon: {
                    name: "mdi-thumb-up",
                    color: "#FFF",
                    container: "#81B49A",
                },
            },
            content: {
                total: {
                    value: "100%",
                    style: ["text-h1", "font-weight-bold"],
                },
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
            bottom_detail: [
                {
                    text: "Total",
                    value: 605,
                    detail: {
                        table: {
                            headers: [
                                {
                                    text: "Dessert (100g serving)",
                                    align: "start",
                                    sortable: false,
                                    value: "name",
                                },
                                { text: "Calories", value: "calories" },
                                { text: "Fat (g)", value: "fat" },
                                { text: "Carbs (g)", value: "carbs" },
                                { text: "Protein (g)", value: "protein" },
                                { text: "Iron (%)", value: "iron" },
                            ],
                            items: [
                                {
                                    name: "Frozen Yogurt",
                                    calories: 159,
                                    fat: 6.0,
                                    carbs: 24,
                                    protein: 4.0,
                                    iron: "1%",
                                },
                                {
                                    name: "Ice cream sandwich",
                                    calories: 237,
                                    fat: 9.0,
                                    carbs: 37,
                                    protein: 4.3,
                                    iron: "1%",
                                },
                                {
                                    name: "Eclair",
                                    calories: 262,
                                    fat: 16.0,
                                    carbs: 23,
                                    protein: 6.0,
                                    iron: "7%",
                                },
                                {
                                    name: "Cupcake",
                                    calories: 305,
                                    fat: 3.7,
                                    carbs: 67,
                                    protein: 4.3,
                                    iron: "8%",
                                },
                                {
                                    name: "Gingerbread",
                                    calories: 356,
                                    fat: 16.0,
                                    carbs: 49,
                                    protein: 3.9,
                                    iron: "16%",
                                },
                                {
                                    name: "Jelly bean",
                                    calories: 375,
                                    fat: 0.0,
                                    carbs: 94,
                                    protein: 0.0,
                                    iron: "0%",
                                },
                                {
                                    name: "Lollipop",
                                    calories: 392,
                                    fat: 0.2,
                                    carbs: 98,
                                    protein: 0,
                                    iron: "2%",
                                },
                                {
                                    name: "Honeycomb",
                                    calories: 408,
                                    fat: 3.2,
                                    carbs: 87,
                                    protein: 6.5,
                                    iron: "45%",
                                },
                                {
                                    name: "Donut",
                                    calories: 452,
                                    fat: 25.0,
                                    carbs: 51,
                                    protein: 4.9,
                                    iron: "22%",
                                },
                                {
                                    name: "KitKat",
                                    calories: 518,
                                    fat: 26.0,
                                    carbs: 65,
                                    protein: 7,
                                    iron: "6%",
                                },
                            ],
                        },
                        title: "Detalle",
                    },
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
            cols: 6,
            color: "#FBF3EF",
            title: {
                name: "Eficacia",
                icon: {
                    name: "mdi-book-clock",
                    color: "#FFF",
                    container: "#3E425D",
                },
            },
            content: {
                total: {
                    value: "90%",
                    style: ["text-h1", "font-weight-bold"],
                },
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
            bottom_detail: [
                {
                    text: "Anteriores",
                    value: 605,
                },
                {
                    text: "Ingresados",
                    value: 602,
                },
                {
                    text: "Resueltos",
                    value: 3,
                },
                {
                    text: "Pendientes",
                    value: 0,
                },
            ],
        },
        {
            cols: 4,
            color: "#80e89b",
            title: {
                name: "Satisfacción",
                icon: {
                    name: "mdi-check-decagram",
                    color: "",
                    container: "",
                },
            },
            content: {
                total: {
                    value: "50%",
                    style: ["text-h2", "font-weight-bold"],
                },
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
                total: {
                    value: "50%",
                    style: ["text-h2", "font-weight-bold"],
                },
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
                total: {
                    value: "50%",
                    style: ["text-h2", "font-weight-bold"],
                },
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
            color: "#d95757",
            dark: true,
        },
    ],
    */
    date: new Date().toISOString().substr(0, 7),
    loading: false,
    first_loading: false,
};

const mutations = {
    setHeader: (state, payload) => {
        state.header = payload;
    },
    setDate: (state, payload) => {
        state.date = payload;
    },
    setLoading: (state, payload) => {
        state.loading = payload;
    },
    setIndicadores: (state, payload) => {
        state.indicadores = payload;
    },
    setFirstLoading: (state, payload) => {
        state.first_loading = payload;
    },
};

const actions = {
    async getDashboard({ commit, state }) {

        try {

            commit("setLoading", true);

            const option_selected = JSON.parse(
                localStorage.getItem("dashboard-iso-option-selected")
            );

            const data = {
                id_proceso: option_selected,
                date: state.date,
            };

            const response = await axios.post(
                process.env.VUE_APP_API_URL + "get_dashboard",
                data
            );

            commit("setHeader", response.data.title);

            commit("setIndicadores", response.data.indicadores);

            commit("setLoading", false);
            commit("setFirstLoading", false);

        } catch (error) {

            commit('setLoading', false)
            commit("setFirstLoading", false);

        }
    },
    async goHome({ dispatch, commit }) {
        localStorage.removeItem("dashboard-iso-option-selected");
        commit("menu/clearMenu", null, { root: true });

        dispatch("getDashboard");
    },
};

export default {
    namespaced,
    state,
    mutations,
    actions,
};
