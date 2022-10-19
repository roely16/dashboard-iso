import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"
import Config from '../components/config/ConfigModule.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: '/config',
        name: 'config',
        component: Config
    }
];

const router = new VueRouter({
    routes,
});

export default router;
