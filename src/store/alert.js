import Swal from "sweetalert2";

import axios from "axios";

const namespaced = true;

const state = {
    tecnico: null,
    chart_rechazo_tecnico: null,
    loading: false
};

const mutations = {
    setTecnico: (state, payload) => {
        state.tecnico = payload;
    },
    setChart_rechazo_tecnico: (state, payload) => {
        state.chart_rechazo_tecnico = payload
    },
    setLoading: (state, payload) => {
        state.loading = payload
    }
};

const actions = {

    async fetchGestionCarteraTecnicos({ rootState, commit }) {

        try {

            const data = {
                date: rootState.dashboard.date,
            };

            const response = await axios.post(
                process.env.VUE_APP_API_URL + "tecnicos_rechazos",
                data
            );

            const { value: tecnico } = await Swal.fire({
                title: "Seleccione un técnico",
                input: "select",
                target: document.getElementById("swal2-container"),
                inputOptions: response.data,
                inputPlaceholder: "Selecccione un técnico",
                showCancelButton: true,
                allowOutsideClick: false,
                inputValidator: (value) => {
                    return new Promise((resolve) => {
                        if (!value) {
                            resolve("Debe de seleccionar una opción!");
                        } else {
                            resolve();
                        }
                    });
                },
            });

            if (tecnico) {
                
                commit('setLoading', true)

                const data_chart = {
                    nit: tecnico,
                    date: rootState.dashboard.date
                }

                const chart_response = await axios.post(process.env.VUE_APP_API_URL + 'chart_rechazo_tecnico', data_chart)

                commit('setChart_rechazo_tecnico', chart_response.data)
                commit('setLoading', false)
                
            }

        } catch (error) {
            console.log(error);
        }
    },
};

export default {
    namespaced,
    state,
    mutations,
    actions,
};
