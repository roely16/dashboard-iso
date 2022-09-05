import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import menu from "./menu";
import dashboard from './dashboard'
import dialog from './dialog'
import alert from './alert'
import config from './config'

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        menu: menu,
        dashboard: dashboard,
        dialog: dialog,
        alert: alert,
        config: config
    },
});
