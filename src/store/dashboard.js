import axios from "axios";

import router from '../router/index'

const namespaced = true;

const state = {
    header: null,
    indicadores: [],
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

        router.push({ name: 'home' })

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
