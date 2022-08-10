<template>
    <div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="Auxiliate de la resta ABN" v-model="restaIn" onkeypress="return event.charCode >= 43 && event.charCode <= 61 && event.charCode != 44 && event.charCode != 46 && event.charCode != 47 && event.charCode != 58 && event.charCode != 59 && event.charCode != 60">
            <label for="floatingInput">{{pregunta}}</label>
            <button id="botonChecar" type="button" :class="{'btn btn-primary btn-sm': indicador2,'btn btn-danger btn-sm': !indicador2}" @click="validarRespuesta">
                <span v-if="indicador1">Prueba tu respuesta</span>
                <span v-if="!indicador1">{{indicador2?"¡CORRECTO!. Felicidades por resolver este problema con la resta ABN":"Intenta nuevamente, revisa la resta en el formato que acabas de terminar."}}</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "RestaInput",
    props:{
        pregunta: String,
        x: Number,
        y: Number,
        resta: Number
    },
    computed:{
        xNew(){
            return this.x.toString();
        },
        yNew(){
            return this.y.toString();
        },
        restaNew() {
            return this.resta.toString();
        }
    },
    data: function() {
        return {
            restaIn: '',
            indicador1: true,
            indicador2: true,
        }
    },
    methods: {
        validarRespuesta() {
            this.indicador1 = false;
            let cadenaR = this.xNew+'-'+this.yNew+'='+this.restaNew;
            if (this.restaIn === cadenaR) {
                this.indicador2 = true;
            } else {
                this.indicador2 = false;
            }
        }
    }
}
</script>

<style scoped>
#floatingInput{
    border: 2px solid blue;
    font-weight:bold;
    font-size:1.5rem;
    text-align: center;
    height: 200px;
    /*width: 330px;*/
}
#botonChecar{
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 300px;
}
</style>