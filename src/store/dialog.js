const namespaced = true

const state = {
    show: false,
    fullscreen: false,
    data: {
    },
    search: null,
    showSearch: false,
    width: null
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

        state.fullscreen = payload.fullscreen
    },
    setSearch: (state, payload) => {
        state.search = payload
    },
    setShowSearch: (state) => {
        state.showSearch = !state.showSearch
    },
    setWidth: (state, payload) => {
        state.width = payload
    }
}

const actions = {}

export default {
    namespaced,
    state,
    mutations,
    actions
}