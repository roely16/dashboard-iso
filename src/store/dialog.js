const namespaced = true

const state = {
    show: false,
    fullscreen: false,
    data: null
}

const mutations = {
    setShow: (state, payload) => {
        state.show = payload
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
    }
}

const actions = {}

export default {
    namespaced,
    state,
    mutations,
    actions
}