import axios from "axios";

const namespaced = true

const state = {
    logging: false,
    user_data: JSON.parse(localStorage.getItem('dashboard-iso')),
    process: [],
    date: new Date().toISOString().substr(0, 7)
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

        } catch (error) {
            
            console.log(error.response)

        }

    },
    async doLogout(){

        try {
            
            localStorage.removeItem('dashboard-iso')

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

    }
}

export default {
    namespaced,
    state,
    mutations,
    actions
}