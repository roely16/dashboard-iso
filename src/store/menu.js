const namespaced = true

const state = {
    drawer: false,
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

}

const mutations = {
    setDrawer: (state, payload) => {
        state.drawer = payload
    }
}

const actions = {}

export default {
    namespaced,
    state,
    mutations,
    actions
}