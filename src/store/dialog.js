const namespaced = true

const state = {
    show: false,
    fullscreen: false
}

const mutations = {
    setShow: (state, payload) => {
        state.show = payload
    },
    setFullScreen: (state) => {
        state.fullscreen = !state.fullscreen
    }
}

const actions = {}

export default {
    namespaced,
    state,
    mutations,
    actions
}