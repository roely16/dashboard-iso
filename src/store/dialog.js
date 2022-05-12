const namespaced = true

const state = {
    show: false,
    fullscreen: false,
    data: null,
    search: null,
    showSearch: false
}

const mutations = {
    setShow: (state, payload) => {
        state.show = payload

        if (!state.show) {
            state.fullscreen = false
            state.search = null
            state.showSearch = false
        }
    },
    setFullScreen: (state) => {
        state.fullscreen = !state.fullscreen
    },
    setData: (state, payload) => {

        if (!payload) {
            state.data = {
                table: {
                    items: [],
                    headers: []
                },
                title: null
            }

            return 
        }

        state.data = payload
    },
    setSearch: (state, payload) => {
        state.search = payload
    },
    setShowSearch: (state) => {
        state.showSearch = !state.showSearch
    }
}

const actions = {}

export default {
    namespaced,
    state,
    mutations,
    actions
}