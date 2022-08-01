<template>
    <div>
        <p class="fs-2 text-primary text-center fw-bold">Cuántos lugares disponibles tiene el autobus</p>
        <div id="intro" v-show="mostrarIntro">
            <p class="fs-3">
                <span class="text-primary">La resta ABN en un problema de combinacion: </span> Da click en el boton "Comenzar", resuelve el problema y ayudame a saber si podré llevar a toda mi familia en el mismo autobus.
            </p>
            <img src="../../assets/imgA4/busgreen.jpg" class="img-fluid" alt="Autobus de viaje">
        </div>
        <div id="problema" v-show="!mostrarIntro">
            <p class="fs-4">Para estas vacaciones llevaré a mi familia de paseo a la playa. Pero al comprar los boletos en un sitio de internet solo obtengo una vista de los asientos con: rojo ocupados, verde: disponibles.<br><br>He contado X asientos ocupados de los X que tiene el autobus. Ayudame a saber cuantos asientos quedan libres mediante el algoritmo ABN de la resta.</p>
        </div>
        <button type="button" class="btn btn-primary" @click="mostrarIntro=false">Comenzar</button>
        <router-link to="/"><span class="ligas">Ver Actividades</span></router-link>
    </div>
</template>


<script>

export default {
    name: "ProblemaCombinacion",
    data: function () {
        return {
            mostrarIntro: true,
        }
    }
}
</script>


<style scoped>

</style>
