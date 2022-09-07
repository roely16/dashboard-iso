import axios from 'axios'

import router from '../router'

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

        state.menu.forEach(category => {

            const result = category.procesos.filter(proceso => proceso.id == payload.id)

            if (result.length > 0) {
                
                result[0].selected = true

            }

        })

    },
    clearMenu: (state) => {
        state.menu.forEach(category => {
            category.procesos.forEach(proceso => {
                proceso.selected = false
            });
         });
    }
}

const actions = {
    async getMenu({commit}){

        const response = await axios.get(process.env.VUE_APP_API_URL + 'get_menu')

        commit('setMenu', response.data)

        const option_selected = JSON.parse(localStorage.getItem('dashboard-iso-option-selected'))

        if (option_selected) {
            
            commit('selectOption', {id: option_selected})

        }

    },
    async selectMenu({commit, dispatch}, payload){

        router.push({ name: 'home' })
        
        commit('selectOption', payload)

        localStorage.setItem('dashboard-iso-option-selected', payload.id)

        dispatch('dashboard/getDashboard', null, {root: true})
        
    }
}

export default {
    namespaced,
    state,
    mutations,
    actions
}