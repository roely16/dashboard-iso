import axios from "axios";

const namespaced = true

const state = {
    logging: false,
    user_data: JSON.parse(localStorage.getItem('dashboard-iso')),
    process: [],
    date: new Date().toISOString().substr(0, 7),
    process_preview: null,
    loading: false,
    logged: false,
    select_process: null,
    kpi_selected: null,
    bottom_selected: null,
    indicador: null
}

const mutations = {
    setLogging: (state, payload) => [
        state.logging = payload
    ],
    setProcess: (state, payload) => {
        state.process = payload
    },
    setDate: (state, payload) => {
        state.date = payload
    },
    setProcessPreview: (state,payload) => {
        state.process_preview = payload
    },
    setLoading: (state, payload) => {
        state.loading = payload
    },
    setLogged: (state, payload) => {
        state.logged = payload
    },
    setKPISelected: (state, payload) => {
        state.kpi_selected = payload
    },
    setBottomSelected: (state, payload) => {
        state.bottom_selected = payload
    },
    setIndicador: (state, payload) => {
        state.indicador = payload
    },
    updateTotal: (state, payload) => {

        state.bottom_selected.value = parseInt(payload)

        // * Actualizar el total

        // * Obtener de bottom_detail los identificados como up y down

        const up = state.indicador.bottom_detail.filter(item => item.divide == 'up')

        let total_up = 0

        up.forEach(element => {
            total_up += parseInt(element.value)
        });

        const down = state.indicador.bottom_detail.filter(item => item.divide == 'down')

        let total_down = 0

        down.forEach(element => {
            total_down += parseInt(element.value)
        });

        const result = total_up / total_down

        if (total_down <= 0 || !total_down || total_up <= 0 || !total_up) {
            
            state.indicador.content.total.value = 0

            return 
        }

        let total = result * 100

        state.indicador.content.total.value = total > 100 ? 100 : Number.isInteger(total) ? total : total.toFixed(1)

    }
}

const actions = {
    async doLogin({ commit }, payload){

        try {
            
            commit('setLogging', true)

            const response = await axios.post(process.env.VUE_APP_API_URL + 'login_config', payload)

            // * Guardar en localStorage el estado
            localStorage.setItem('dashboard-iso', JSON.stringify(response.data))

            commit('setLogging', false)
            commit('setLogged', true)

        } catch (error) {
            
            console.log(error.response)

        }

    },
    async doLogout({ commit }){

        try {
            
            localStorage.removeItem('dashboard-iso')

            commit('setLogged', false)

        } catch (error) {
            
            console.log(error)

        }

    },
    async fetchProcess({ commit }){

        try {
            
            // * Obtener el listado de procesos
            const response = await axios.post(process.env.VUE_APP_API_URL + 'get_process')

            commit('setProcess', response.data)

            console.log(response.data)

        } catch (error) {
            
            console.log(error.response)

        }

    },
    async fetchDataProcess({ commit, state }, payload){

        try {
            
            if (payload) {
                payload.loading = true
            }
            commit('setLoading', true)

            const data = {
                date: state.date,
                id_proceso: payload ? payload.id : state.process_preview.id
            }

            const response = await axios.post(process.env.VUE_APP_API_URL + 'get_dashboard_config', data)

            if (payload) {
                
                payload.detail = response.data
                commit('setProcessPreview', payload)
                payload.loading = false

            }else{

                let update_process = state.process_preview
                update_process.detail = response.data 

                commit('setProcessPreview', update_process)

            }

            commit('setLoading', false)

        } catch (error) {
            
            console.log(error)

        }

    },
    async resetPreview({ commit }){
        try {
            
            commit('setProcessPreview', null)

        } catch (error) {
            
            console.log(error)

        }
    },
    async saveData({ commit }, payload){

        try {
            
            commit('setLoading', true)

            const userData = JSON.parse(localStorage.getItem('dashboard-iso'))

            payload.registrado_por = userData.usuario

            await axios.post(process.env.VUE_APP_API_URL + 'save_data', payload)

            commit('setLoading', false)

        } catch (error) {
            
            console.log(error)

        }

    }
}

export default {
    namespaced,
    state,
    mutations,
    actions
}