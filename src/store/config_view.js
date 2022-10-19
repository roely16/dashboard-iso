import axios from "axios";

const namespaced = true

const state = {
    options: [
        {
            'text': 'Indicadores',
            'component': 'FreezeOption',
            'icon': 'mdi-monitor-dashboard',
            'selected': true
        },
        // {
        //     'text': 'Excepciones',
        //     'component': 'TableConfig',
        //     'icon': 'mdi-monitor-dashboard',
        //     'selected': false
        // },
        // {
        //     'text': 'Cierre de Mes',
        //     'component': 'ConfigJob',
        //     'icon': 'mdi-calendar-clock-outline',
        //     'selected': false
        // }
    ],
    table_config: {},
    new_config: [],
    type: null
}

const mutations = {
    selectOption: (state, payload) => {

        state.options.forEach(item => {
            item.selected = false
        });

        payload.selected = true

    },
    setTableConfig: (state, payload) => {
        state.table_config = payload
    },
    setNewConfig: (state, payload) => {
        state.new_config = payload
    }
}

const actions = {

    async getConfigList({ commit }){

        try {
            
            const response = await axios.get(process.env.VUE_APP_API_URL + 'get_list')

            commit('setTableConfig', response.data)

            console.log(response.data)

        } catch (error) {
            
            console.error(error)

        }

    },
    async getNewConfig({ commit }){

        try {
            
            const response = await axios.get(process.env.VUE_APP_API_URL + 'new_config')

            commit('setNewConfig', response.data)

        } catch (error) {
            
            console.error(error)

        }

    }

}

export default {
    namespaced,
    state,
    mutations,
    actions
}