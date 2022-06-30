import Vue from 'vue';
import VueRouter from 'vue-router';

import GridCards from "../components/GridCards.vue";
import ComplementoA10 from "../components/actvs/ComplementoA10.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "home",
        component: GridCards
    },
    {
        path: "/complementoa10",
        name: "complementoa10",
        component: ComplementoA10
    }
]

const router = new VueRouter({
    mode: "history",
    routes: routes
})

export default router;