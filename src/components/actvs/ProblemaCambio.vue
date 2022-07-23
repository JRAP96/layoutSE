<template>
    <div>
        <p class="fs-2 text-primary text-center fw-bold">Quiero saber mi consumo de gasolina</p>
        <div id="intro" v-if="mostrarIntro">
            <p class="fs-3">
                <span class="text-primary">La resta ABN en un problema de cambio: </span> Da click en el boton "Comenzar" y resuelve el problema, ayudandome a calcular cúal fue mi consumo semanal de gasolina.
            </p>
            <img width="300px" src="../../assets/imgA3/fuelPrincipal.png" class="rounded mx-auto d-block" alt="Indicador de gasolina">
        </div>
        <div id="problema" v-else>
            <p class="fs-3">El lunes por la mañana mi automóvil tenía <strong>{{this.x}} litros de gasolina</strong>, durante toda la semana trabaje y al final de la semana solo tenía <strong>{{this.resta}} litros</strong>. <span id="question">¿Cuántos litros de gasolina gaste en la semana?</span></p>
            <formato-resta :x="x" :y="y" :resta="resta"/>
        </div>
        <button type="button" class="btn btn-primary" @click="generarRamdon">Comenzar</button>
        <button type="button" class="btn btn-secondary" @click="reiniciarRamdon">Reiniciar</button>
    </div>
</template>

<script>
import FormatoResta from "../actvs/actvshijos/FormatoResta.vue"

export default {
    name: "ProblemaCambio",
    components: {
        FormatoResta
    },
    data: function () {
        return {
            mostrarIntro: true,
            x: 0,
            y: 0,
            resta: 0
        }
    },
    methods: {
        randomF(min,max) {
            let i = Math.floor((Math.random() * (max - min + 1)) + min);
            return i;
        },
        generarRamdon() {
            this.x = this.randomF(60,100);
            this.y = this.randomF(1,55);
            this.resta = this.x - this.y;
            this.mostrarIntro = false;
        },
        reiniciarRamdon() {
            this.mostrarIntro = true;
        }
    }
}
</script>

<style scoped>
#problema,#intro{
    margin: 1rem;
}
    #question{
        font-weight: bold;
        color: rgb(50, 128, 50)
    }

</style>