<template>
    <div>
        <div id="contFormato">
            <table class="table table-bordered border-primary">
                <thead>
                    <tr>
                        <th colspan="4" class="bg bg-primary">
                            <p v-if="!finalizo">{{this.x}} - {{this.resta}}</p>
                            <p v-if="finalizo">{{this.x}} - {{this.resta}} = {{this.valorResta}}</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="bg-info withPad">Quito</th>
                        <th>
                            <p class="fs-6 lh-1">{{this.tituloMin}}</p>
                            {{this.x}}
                        </th>
                        <th>
                            <p class="fs-6 lh-1">{{this.tituloSus}}</p>
                            {{this.resta}}
                        </th>
                        <th class="withPad">Checar</th>
                    </tr>
                    <tr v-for="(item,index) in contadorArray" :key="index" :class="{bordesGreen: (item.correcto1 && item.correcto2), bordesNone: !(item.correcto1 && item.correcto2)}">
                        <td class="bg-info">
                            <input type="number" :disabled="(item.desabilitar == 1)||(item.correcto1 && item.correcto2)" placeholder="..." v-model.number="item.quito" onkeypress="return event.charCode >= 48 && event.charCode <= 57" min="0">
                        </td>
                        <td :class="{finalS: item.final,finalN: !item.final}">
                            <input type="number" :disabled="(item.desabilitar == 1)||(item.correcto1 && item.correcto2)" placeholder="..." v-model.number="item.minuendo" onkeypress="return event.charCode >= 48 && event.charCode <= 57" min="0">
                                <div v-if="item.pasados1" class="alert alert-warning text-dark" role="alert">
                                    <p class="fs-6">Quitaste menos de lo que indicaste en la columna Quito. Corrigue</p>
                                </div>
                                <div v-if="item.pasados2" class="alert alert-warning text-dark" role="alert">
                                    <p class="fs-6">Quitaste más de lo indicado en Quito.</p>
                                </div>
                        </td>
                        <td :class="{finalS: item.final,finalN: !item.final}">
                            <input type="number" :disabled="(item.desabilitar == 1)||(item.correcto1 && item.correcto2)" placeholder="..." v-model.number="item.sustraendo" onkeypress="return event.charCode >= 48 && event.charCode <= 57" min="0">
                                <div v-if="item.pasados3" class="alert alert-warning text-dark" role="alert">
                                    <p class="fs-6">Quitaste menos de lo que indicaste en la columna Quito. Corrigue</p>
                                </div>
                                <div v-if="item.pasados4" class="alert alert-warning text-dark" role="alert">
                                    <p class="fs-6">Quitaste más de lo que indicaste en la columna Quito. Corrigue</p>
                                </div>
                        </td>
                        <td :class="{finalS: item.final,finalN: !item.final}">
                            <button
                                v-if="!(item.correcto1 && item.correcto2)"
                                :id="index" 
                                type="button" 
                                :class="{'btn btn-outline-primary btn-sm':item.llenos,'btn btn-outline-warning btn-sm': !item.llenos}" 
                                @click="validador($event)">
                                    {{item.llenos?"Validar":"Debes llenar la fila. Luego da click."}}
                            </button>
                            <p class="fs-6" v-else-if="item.final">Terminaste. Mira la resta</p>
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
        resta: Number,
        tituloMin: String,
        tituloSus: String,
    },
    data: function() { 
        return{
            contadorArray: [ {quito: null,minuendo: null,sustraendo: null,llenos: true,pasados: false,pasados1: false,pasados2: false,pasados3: false,pasados4: false,correcto1: false,correcto2: false,desabilitar: 0,final: false},
                            {quito: null,minuendo: null,sustraendo: null,llenos: true,pasados: false,pasados1: false,pasados2: false,pasados3: false,pasados4: false,correcto1: false,correcto2: false,desabilitar: 1,final: false},
                            {quito: null,minuendo: null,sustraendo: null,llenos: true,pasados: false,pasados1: false,pasados2: false,pasados3: false,pasados4: false,correcto1: false,correcto2: false,desabilitar: 1,final: false}],
            xNew: this.x,
            restaNew: this.resta,
            finalizo: false,
            valorResta: null,
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
                correcto2: false,
                desabilitar: 1,
                final: false
            });
        },
        validador(evt) {    // Vamos a validar que haya metido los tres datos de la fila y enlazamos los demas metodos que continuan de validacion
            let objNow = this.contadorArray[parseInt(evt.target.id)];
            if (objNow.quito != null && objNow.minuendo != null && objNow.sustraendo != null) {
                objNow.llenos = true;
                this.validador2(parseInt(evt.target.id));
                this.validador3(parseInt(evt.target.id));
                this.validador4(objNow,parseInt(evt.target.id));
            } else {
                objNow.llenos = false;
            }
            return
        },
        validador2(idO) {   // Validamos que los dominios de las tres entradas esten en los intervalos naturales adecuados
            let objO = this.contadorArray[idO];
            if (idO == 0) {     // Cuando apenas se comienza idO=0, se crea un obj previo idO=-1.
                let objA = {quito: 0,minuendo: this.xNew,sustraendo: this.restaNew,llenos: true,pasados: false,pasados1: false,pasados2: false,pasados3: false,pasados4: false,correcto1: false,correcto2: false,desabilitar: 1,final: false}; // Obj provisional que funciona como fila 0.
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
                let objA = {quito: 0,minuendo: this.xNew,sustraendo: this.restaNew,llenos: true,pasados: false,pasados1: false,pasados2: false,pasados3: false,pasados4: false,correcto1: false,correcto2: false,desabilitar: 1,final: false};
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
                obj.correcto1 = false;
            } else {
                obj.pasados1 = true;
                obj.pasados2 = false;
                obj.correcto1 = false;
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
                obj.correcto2 = false;
            } else {
                obj.pasados3 = true;
                obj.pasados4 = false;
                obj.correcto2 = false;
            }
        },
        validador4(obj,idNow) { // Validamos que estando correctos los inputs de cada fila se habiliten los inputs de la fila siguiente, en caso de ser una la ultima fila se agrega automaticamente una sino se cumple que el valor del sustraendo es 0. Si es cero se acaba todo.
        // AQUI emitimos el evento al padre que dara de informacion ((obj.minuendo,obj.sustraendo,obj.quito)) esas tres.
            if(obj.correcto1 == true && obj.correcto2 == true) {
                let idProx = idNow + 1;
                if(this.contadorArray[idProx] == undefined && obj.sustraendo != 0) {
                    this.agregarFila();
                }
                if(obj.sustraendo == 0) {
                    this.valorResta = obj.minuendo;
                    this.finalizo = true;
                    obj.final = true;
                    this.$emit('objAct',obj.minuendo,obj.sustraendo,obj.quito);
                    return
                }
                this.contadorArray[(idProx)].desabilitar = 0;
                this.$emit('objAct',obj.minuendo,obj.sustraendo,obj.quito);
            }
        },
    }
}
</script>

<style scoped>
.withPad{
    padding-top: 2rem;
}
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
.finalS{
    background-color: rgb(110, 173, 110);
}
.finalN{
    background-color: none;
}

</style>