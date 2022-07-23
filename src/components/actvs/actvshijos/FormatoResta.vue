<template>
    <div>
        <div id="contFormato">
            <table class="table table-bordered border-primary">
                <thead>
                    <tr>
                        <th colspan="4" class="bg bg-primary">{{this.x}} - {{this.resta}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="bg-info">Quito</th>
                        <th>{{this.x}}</th>
                        <th>{{this.resta}}</th>
                        <th>Checar</th>
                    </tr>
                    <tr v-for="(item,index) in contadorArray" :key="index" :class="{bordesGreen: (item.correcto1 && item.correcto2), bordesNone: !(item.correcto1 && item.correcto2)}">
                        <td class="bg-info">
                            <input type="number" placeholder="..." v-model.number="item.quito">
                        </td>
                        <td>
                            <input type="number" placeholder="..." v-model.number="item.minuendo">
                                <div v-if="item.pasados1" class="alert alert-warning text-dark" role="alert">
                                    <p class="fs-6">Quitaste menos de lo que indicaste en la columna Quito. Corrigue</p>
                                </div>
                                <div v-if="item.pasados2" class="alert alert-warning text-dark" role="alert">
                                    <p class="fs-6">Quitaste más de lo indicado en Quito.</p>
                                </div>
                        </td>
                        <td>
                            <input type="number" placeholder="..." v-model.number="item.sustraendo">
                                <div v-if="item.pasados3" class="alert alert-warning text-dark" role="alert">
                                    <p class="fs-6">Quitaste menos de lo que indicaste en la columna Quito. Corrigue</p>
                                </div>
                                <div v-if="item.pasados4" class="alert alert-warning text-dark" role="alert">
                                    <p class="fs-6">Quitaste más de lo que indicaste en la columna Quito. Corrigue</p>
                                </div>
                        </td>
                        <td>
                            <button
                                v-if="!(item.correcto1 && item.correcto2)"
                                :id="index" 
                                type="button" 
                                :class="{'btn btn-outline-primary btn-sm':item.llenos,'btn btn-outline-warning btn-sm': !item.llenos}" 
                                @click="validador($event)">
                                    {{item.llenos?"Validar":"Debes llenar la fila. Luego da click."}}
                            </button>
                            <p v-else class="fs-6">Correcto</p>
                            <div v-if="item.pasados" class="alert alert-danger text-dark" role="alert">
                                <p class="fs-6">No puedes quitar más que el sustraendo ni colocar negativos. Corrigue.</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button type="button" class="btn btn-success" @click="agregarFila">+</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "FormatoResta",
    props: {
        x: Number,
        y: Number,
        resta: Number
    },
    data: function() { 
        return{
            contadorArray: [ {quito: null,minuendo: null,sustraendo: null,llenos: true,pasados: false,pasados1: false,pasados2: false,pasados3: false,pasados4: false,correcto1: false,correcto2: false},
                            {quito: null,minuendo: null,sustraendo: null,llenos: true,pasados: false,pasados1: false,pasados2: false,pasados3: false,pasados4: false,correcto1: false,correcto2: false},
                            {quito: null,minuendo: null,sustraendo: null,llenos: true,pasados: false,pasados1: false,pasados2: false,pasados3: false,pasados4: false,correcto1: false,correcto2: false}],
            xNew: this.x,
            restaNew: this.resta,
        }
    },
    computed: {
        
    },
    methods: {
        agregarFila() { // Solo agregamos una fila
            this.contadorArray.push({
                quito: null,
                minuendo: null,
                sustraendo: null,
                llenos: true,
                pasados: false,
                pasados1: false,
                pasados2: false,
                pasados3: false,
                pasados4: false,
                correcto1: false,
                correcto2: false
            });
        },
        validador(evt) {    // Vamos a validar que haya metido los tres datos de la fila y enlazamos los demas metodos que continuan de validacion
            let objNow = this.contadorArray[parseInt(evt.target.id)];
            if (objNow.quito != null && objNow.minuendo != null && objNow.sustraendo != null) {
                objNow.llenos = true;
                this.validador2(parseInt(evt.target.id));
                this.validador3(parseInt(evt.target.id));
            } else {
                objNow.llenos = false;
            }
            return
        },
        validador2(idO) {   // Validamos que los dominios de las tres entradas esten en los intervalos naturales adecuados
            let objO = this.contadorArray[idO];
            if (idO == 0) {     // Cuando apenas se comienza idO=0, se crea un array previo idO=-1.
                let objA = {quito: 0,minuendo: this.xNew,sustraendo: this.restaNew,llenos: true,pasados: false,pasados1: false,pasados2: false,pasados3: false,pasados4: false};
                if (objO.quito > objA.sustraendo || objO.quito < 0 || objO.sustraendo < 0 || objO.minuendo < 0) {
                    objO.pasados = true;
                } else {
                    objO.pasados = false;
                }
                return
            }   // Esta es la rutina para los siguientes objetos (filas de la tabla) a partir de idO = 1.
            let objA = this.contadorArray[idO-1];
            if (objO.quito > objA.sustraendo || objO.sustraendo < 0 || objO.minuendo < 0) {
                objO.pasados = true;
            } else {
                objO.pasados = false;
            }
            return
        },
        validador3(idO) {   // Validamos (que los numeros ingresados por filas sean correctos) que la dif entre un minuendo (sustraendo) anterior y uno posterior sea lo que queria quitar el usuario, menor o mayor.
            let objO = this.contadorArray[idO];
            if (idO == 0) { // Para el primer objeto del array idO = 0
                let objA = {quito: 0,minuendo: this.xNew,sustraendo: this.restaNew,llenos: true,pasados: false,pasados1: false,pasados2: false,pasados3: false,pasados4: false};
                let dif1 = objA.minuendo - objO.minuendo;
                let dif2 = objA.sustraendo - objO.sustraendo;
                this.validador31(dif1,objO);    // hacer la validacion para el minuendo
                this.validador32(dif2,objO);    //  hacer la validacion para el sustraendo
            } else {    // Para cuando se traten de los objectos o filas de la tabla con idO mayor o iugal que 1.
                let objA = this.contadorArray[idO-1];
                let dif1 = objA.minuendo - objO.minuendo;
                let dif2 = objA.sustraendo - objO.sustraendo;
                this.validador31(dif1,objO);    // hacer la validacion para el minuendo
                this.validador32(dif2,objO);    //  hacer la validacion para el sustraendo
            }
        },
        validador31(dif,obj) {  // Para esta validacion ver validacion3(ido)
            if (dif == obj.quito) {
                obj.pasados2 = false;
                obj.pasados1 = false;
                obj.correcto1 = true;    // Cambiamos el valor de la propiedad para activar o no la clase de que la fila se ha complatado bien
            } else if (dif > obj.quito) {
                obj.pasados2 = true;
                obj.pasados1 = false;
            } else {
                obj.pasados1 = true;
                obj.pasados2 = false;
            }
        },
        validador32(dif,obj) {  // Para esta validacion ver validacion3(ido)
            if (dif == obj.quito) {
                obj.pasados4 = false;
                obj.pasados3 = false;
                obj.correcto2 = true;    // Cambiamos el valor de la propiedad para activar o no la clase de que la fila se ha complatado bien
            } else if (dif > obj.quito) {
                obj.pasados4 = true;
                obj.pasados3 = false;
            } else {
                obj.pasados3 = true;
                obj.pasados4 = false;
            }
        },
    }
}
</script>

<style scoped>
#contFormato{
    text-align: center;
    width: 250px;
    font-size: 2rem;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin: 0 auto;
}
input{
    text-align: center;
    width: 75px;
    outline: none;
    border: 0;
    background-color: transparent;
}
.bordesGreen{
    border: green 3px solid;
}
.bordesNone{
    border: blue 0.5px solid;
}

</style>