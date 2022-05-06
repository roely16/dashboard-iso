import axios from 'axios'

const namespaced = true

const state = {
    drawer: false,
    loading: false,
    menu: [
        {
            name: "Procesos de Valor",
            items: [
                {
                    name: "Avisos Notariales",
                    icon: "mdi-file-document",
                    to: "",
                },
                {
                    name: "SIMA",
                    icon: "mdi-archive",
                    to: "",
                },
                {
                    name: "Nomenclatura",
                    icon: "mdi-map-marker",
                    to: "",
                },
                {
                    name: "Atención al Contribuyente",
                    to: "",
                },
                {
                    name: "Liquidaciones",
                    to: "",
                },
                {
                    name: "Cuenta Corriente",
                    to: "",
                },
                {
                    name: "Convenios IUSI",
                    to: "",
                },
            ],
        },
        {
            name: "Procesos de Apoyo",
            items: [
                {
                    name: "Gestión de Servicios",
                    to: "",
                },
                {
                    name: "Informática",
                    to: "",
                },
                {
                    name: "Adquisiciones",
                    to: "",
                },
            ],
        },
    ],
    option_selected: null
}

const mutations = {
    setDrawer: (state, payload) => {
        state.drawer = payload
    },
    setMenu: (state, payload) => {
        state.menu = payload
    },
    selectOption: (state, payload) => {
        
        state.menu.forEach(category => {
           category.procesos.forEach(proceso => {
               proceso.selected = false
           });
        });

        state.option_selected = payload.id

        payload.selected = true
    }
}

const actions = {
    async getMenu({commit}){

        const response = await axios.get(process.env.VUE_APP_API_URL + 'get_menu')

        commit('setMenu', response.data)

    },
    async selectMenu({commit, dispatch}, payload){

        commit('selectOption', payload)

        dispatch('dashboard/getDashboard', null, {root: true})
        
    }
}

export default {
    namespaced,
    state,
    mutations,
    actions
}