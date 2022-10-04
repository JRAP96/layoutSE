import Vue from 'vue';
import VueRouter from 'vue-router';

import GridCards from "../components/GridCards.vue";
import ComplementoA10 from "../components/actvs/ComplementoA10.vue"
import ComplementoA102 from "../components/actvs/ComplementoA102.vue"
import ProblemaCambio from "../components/actvs/ProblemaCambio.vue"
import ProblemaCombinacion from "../components/actvs/ProblemaCombinacion.vue"
import ProblemaComparacion from "../components/actvs/ProblemaComparacion.vue"
import ProblemaIgualacion from "../components/actvs/ProblemaIgualacion.vue"

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
    },
    {
        path: "/complementoa102",
        name: "complementoa102",
        component: ComplementoA102
    },
    {
        path: "/problemacambio",
        name: "problemacambio",
        component: ProblemaCambio
    },
    {
        path: "/problemacombinacion",
        name: "problemacombinacion",
        component: ProblemaCombinacion
    },
    {
        path: "/problemacomparacion",
        name: "problemacomparacion",
        component: ProblemaComparacion
    },
    {
        path: "/problemaigualacion",
        name: "problemaigualacion",
        component: ProblemaIgualacion
    }
]

const router = new VueRouter({
    mode: "history",
    routes: routes
})

export default router;