<template>
    <div>
        <h3 id="titAct">Los peces salen de viaje</h3>
        <h5 id="instruAct">El grupo de peces que ha salido de excursión ya no puede seguir con su camino, pues están atravezando un arrecife de coral muy dificil por el cual nadar. Todos los peces deben de tener sus 10 escamas para poder atravezarlo, sin embargo, algunos de ellos tienen menos de 10 escamas.<br><br>Ayudalos arrastrando de 1 en 1 las escamas de la bolsa hasta los peces que no tiene sus 10 escamas (marcos amarillos) y completalas.</h5>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-6 col-md-2">
                    <div id="0" class="peces" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent>
                    </div>
                    <div class="pecesaux">
                        <pez-hijo :contador="counter" :queE="0" :mostrarM="mostrar" v-if="mostrar"/>
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div id="1" class="peces">
                    </div>
                    <div class="pecesaux">
                        <pez-hijo :contador="9" :queE="1" :mostrarM="mostrar" v-if="mostrar"/>
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div id="2" class="peces">
                    </div>
                    <div class="pecesaux">
                        <pez-hijo :contador="8" :queE="2" :mostrarM="mostrar" v-if="mostrar"/>
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div id="3" class="peces">
                    </div>
                    <div class="pecesaux">
                        <pez-hijo :contador="7" :queE="3" :mostrarM="mostrar" v-if="mostrar"/>
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div id="4" class="peces" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent>
                    </div>
                    <div class="pecesaux">
                        <pez-hijo :contador="counter1" :queE="4" :mostrarM="mostrar" v-if="mostrar"/>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center justify-content-md-end">
                <div class="col-7 col-md-10">
                    <div id="escamasB">
                        <div id="escamasB2">
                            <img draggable class="escam" src="../../assets/imgA1/escama.png" alt="Toma 1 escama" @dragstart="startDrag($event)">
                        </div>
                    </div>
                </div>
                <div class="col-5 col-md-2">
                    <div id="10" class="peces">
                    </div>
                    <div class="pecesaux">
                        <pez-hijo :contador="0" :queE="10" :mostrarM="mostrar" v-if="mostrar"/>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-6 col-md-2">
                    <div id="5" class="peces">
                    </div>
                    <div class="pecesaux">
                        <pez-hijo :contador="5" :queE="5" :mostrarM="mostrar" v-if="mostrar"/>
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div id="6" class="peces">
                    </div>
                    <div class="pecesaux">
                        <pez-hijo :contador="4" :queE="6" :mostrarM="mostrar" v-if="mostrar"/>
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div id="7" class="peces" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent>
                    </div>
                    <div class="pecesaux">
                        <pez-hijo :contador="counter2" :queE="7" :mostrarM="mostrar" v-if="mostrar"/>
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div id="8" class="peces">
                    </div>
                    <div class="pecesaux">
                        <pez-hijo :contador="2" :queE="8" :mostrarM="mostrar" v-if="mostrar"/>
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div id="9" class="peces">
                    </div>
                    <div class="pecesaux">
                        <pez-hijo :contador="1" :queE="9" :mostrarM="mostrar" v-if="mostrar"/>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <router-link to="/"><span class="ligas">Ver Actividades</span></router-link>
    </div>
</template>

<script>
import PezHijo from "./actvshijos/PezHijo.vue";

export default {
    name: "ComplementoA10",
    components: {
        PezHijo
    },
    methods: {
        startDrag(evt) {
            evt.dataTransfer.dopEffect = 'move';
            evt.dataTransfer.effectAllowed = 'move';
            evt.dataTransfer.setData('text/plain', '1');
        },
        onDrop(evt) {
            evt.preventDefault();            
            evt.dataTransfer.getData('text/plain');
            this.idCaida = parseInt(evt.target.id);
            if (this.idCaida==0) {
                this.counter++;
            } else if (this.idCaida==4) {
                this.counter1++;
            } else if (this.idCaida==7) {
                this.counter2++;
            }
        },
        cover(url) {
            if (url !== ''){
                try {
                    url = require('../../assets/imgA1/' + url)
                } catch (e) {
                    url = require('../../assets/imgA1/0.png');
                }
            }
            else
                url = require('../../assets/imgA1/0.png'); 
            return url;
        }
    },
    data: function () {
        return {
            idCaida: 0,
            counter: 0,
            counter1: 0,
            counter2: 0,
            mostrar: true
        }
    },
    computed: {
    }
};
</script>

<style scoped>
#titAct{
    margin: 2rem;
    text-decoration: underline;
    text-decoration-color: blue;
}
#instruAct{
    margin-left: 4rem;
    margin-right: 4rem;
    background-color: rgba(0, 255, 255,0.1);
    padding: 10px;
    border-radius: 10px;
    border: 1px solid blue;
}
#escamasB{
    height: 200px;
    background-color: transparent;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
}
    #escamasB2{
        width: 160px;
        height: 120px;
        background-color: lightcyan;
        margin: 0 auto;
    }
        img.escam{
            width: 160px;
            height: 100%;
        }
.peces{
    width: 100px;
    height: 150px;
    background-color: transparent;
    /*border: lightblue 1px solid;*/
    position: absolute;
}
    .pecesaux{
        width: 100px;
    }
    .mostrarPez{
        width: 100%;
        height: auto;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
</style>