<template>
    <div>
        <h3 id="titAct">Los peces salen de viaje - Segunda Parte</h3>
        <h5 id="instruAct">Para continuar con el difícil camino por el arrecife, el Pulpo que se dedica a recoger escamas también se ha percatado de que si los peces se reunen en parejas de forma tal que sus escamas sumen 10, logran atravezarlo.<br><br>Junta a los peces en parejas (solo dos peces por pecera) arrastrando de uno, para que la suma de sus escamas sea 10. Si necesitas mover algún pez más de una vez, puedes moverlos de una pecera a otra</h5>
        <div class="container">
            <div id="peceras1" class="row justify-content-center">
                <div class="col-6 col-lg-2 pP">
                    <div id="pc1" class="pecera" @drop.self="onDrop($event)" @dragover.prevent  @dragenter.prevent ref="peceraCont">
                    </div>
                    <pecera-hijo :elementsArray="elementosArray" :indicadorM5="borrarInfo"/>
                </div>
                <div class="col-6 col-lg-2 pP">
                    <div id="pc2" class="pecera" @drop.self="onDrop($event)" @dragover.prevent  @dragenter.prevent ref="peceraCont">
                    </div>
                    <pecera-hijo :elementsArray="elementosArray1" :indicadorM5="borrarInfo"/>
                </div>
                <div class="col-6 col-lg-2 pP">
                    <div id="pc3" class="pecera" @drop.self="onDrop($event)" @dragover.prevent  @dragenter.prevent ref="peceraCont">
                    </div>
                    <pecera-hijo :elementsArray="elementosArray2" :indicadorM5="borrarInfo"/>
                </div>
                <div class="col-6 col-lg-2 pP">
                    <div id="pc4" class="pecera" @drop.self="onDrop($event)" @dragover.prevent  @dragenter.prevent ref="peceraCont">
                    </div>
                    <pecera-hijo :elementsArray="elementosArray3" :indicadorM5="borrarInfo"/>
                </div>
                <div class="col-6 col-lg-2 pP">
                    <div id="pc5" class="pecera" @drop.self="onDrop($event)" @dragover.prevent  @dragenter.prevent ref="peceraCont">
                    </div>
                    <pecera-hijo :elementsArray="elementosArray4" :indicadorM5="borrarInfo"/>
                </div>
                <div class="col-6 col-lg-2 pP">
                    <div id="pc6" class="pecera" @drop.self="onDrop($event)" @dragover.prevent  @dragenter.prevent ref="peceraCont">
                    </div>
                    <pecera-hijo :elementsArray="elementosArray5" :indicadorM5="borrarInfo"/>
                </div>
            </div>
            <div class="row justify-content-center peceras2">
                <div class="col-6 col-md-2">
                    <div class="peces">
                        <img id="0" class="pezIns" src="../../assets/imgA2/0.png" alt="Pezcadito" @dragstart="startDrag($event)">
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div class="peces">
                        <img id="1" class="pezIns" src="../../assets/imgA2/1.png" alt="Pezcadito" @dragstart="startDrag($event)">
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div class="peces">
                        <img id="2" class="pezIns" src="../../assets/imgA2/2.png" alt="Pezcadito" @dragstart="startDrag($event)">
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div class="peces">
                        <img id="3" class="pezIns" src="../../assets/imgA2/3.png" alt="Pezcadito" @dragstart="startDrag($event)">
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div class="peces">
                        <img id="4" class="pezIns" src="../../assets/imgA2/4.png" alt="Pezcadito" @dragstart="startDrag($event)">
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div class="peces">
                        <img id="5" class="pezIns" src="../../assets/imgA2/5.png" alt="Pezcadito" @dragstart="startDrag($event)">
                    </div>
                </div>
            </div>
            <div class="row justify-content-center peceras2">
                <div class="col-6 col-md-2">
                    <div class="peces">
                        <img id="50" class="pezIns" src="../../assets/imgA2/5.png" alt="Pezcadito" @dragstart="startDrag($event)">
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div class="peces">
                        <img id="6" class="pezIns" src="../../assets/imgA2/6.png" alt="Pezcadito" @dragstart="startDrag($event)">
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div class="peces">
                        <img id="7" class="pezIns" src="../../assets/imgA2/7.png" alt="Pezcadito" @dragstart="startDrag($event)">
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div class="peces">
                        <img id="8" class="pezIns" src="../../assets/imgA2/8.png" alt="Pezcadito" @dragstart="startDrag($event)">
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div class="peces">
                        <img id="9" class="pezIns" src="../../assets/imgA2/9.png" alt="Pezcadito" @dragstart="startDrag($event)">
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div class="peces">
                        <img id="10" class="pezIns" src="../../assets/imgA2/10.png" alt="Pezcadito" @dragstart="startDrag($event)">
                    </div>
                </div>
            </div>
        </div>
        <br>
        <router-link to="/"><span class="ligas">Ver Actividades</span></router-link>
    </div>
</template>

<script>
import PeceraHijo from "./actvshijos/PeceraHijo.vue";
export default {
    name: "ComplementoA102",
    components: {
        PeceraHijo
    },
    data: function () {
        return {
            elementosArray: ["Pez 1","Pez 2"],
            elementosArray1: ["Pez 1","Pez 2"],
            elementosArray2: ["Pez 1","Pez 2"],
            elementosArray3: ["Pez 1","Pez 2"],
            elementosArray4: ["Pez 1","Pez 2"],
            elementosArray5: ["Pez 1","Pez 2"],
            borrarInfo: true
        }
    },
    methods: {
        startDrag(evt) {
            evt.dataTransfer.dropEffect = 'move';
            evt.dataTransfer.effectAllowed = 'move';
            evt.dataTransfer.setData('text/plain', evt.target.id);
            if (evt.target.id=="50") {  // Solucion del caso particular cuando vale 50 el segundo pez de 5 escamas
                this.checadorArray(evt.target.parentNode.id,5,evt.target.parentNode.childElementCount);
                return
            }
            this.checadorArray(evt.target.parentNode.id,parseInt(evt.target.id),evt.target.parentNode.childElementCount);
        },
        checadorArray(elSal,eleARR,cuantos) { // funciones checadorArray y actualizadorCeros checan cual pezcado es "arrastrado" (y de donde) y actualizan a ceros los pescados que saldran de la pecera
            if (elSal == "pc1") {
                this.actualizadorCeros(eleARR,cuantos,this.elementosArray);
            } else if (elSal == "pc2") {
                this.actualizadorCeros(eleARR,cuantos,this.elementosArray1);
            } else if (elSal == "pc3") {
                this.actualizadorCeros(eleARR,cuantos,this.elementosArray2);
            } else if (elSal == "pc4") {
                this.actualizadorCeros(eleARR,cuantos,this.elementosArray3);
            } else if (elSal == "pc5") {
                this.actualizadorCeros(eleARR,cuantos,this.elementosArray4);
            } else if (elSal == "pc6") {
                this.actualizadorCeros(eleARR,cuantos,this.elementosArray5);
            }
            return
        },
        actualizadorCeros(eleARR,cuantos,cualArray) {   // Actualizan a cero los ids de los pezcados que se salieron de la pecera.
            if (cuantos == 1) {                         // Es importante ver que consideramos cuando hay dos pezcados inicialmentre antes de ser arrastrado uno de los dos y cuando solo hay un pezcado en la pecera.
                if (eleARR==cualArray[0]) {
                    cualArray.splice(0,1,"Pez 1");
                } else if (eleARR==cualArray[1]) {
                    cualArray.splice(1,1,"Pez 2");
                }
                return
            } else if (cuantos == 2) {
                if (eleARR==cualArray[0]) {
                    cualArray.splice(0,1,cualArray[1]);
                    cualArray.splice(1,1,"Pez 2");
                } else if (eleARR==cualArray[1]) {
                    cualArray.splice(1,1,"Pez 2");
                }
                return
            }
        },
        onDrop(evt) {   // En el drop haremos 1.- pondremos la imagen de los peces en la pecera 2.- se actualizaran los numeros de la suma
            evt.preventDefault();
            const elementoId = evt.dataTransfer.getData('text/plain');
            const elemento = document.getElementById(elementoId);
            if (evt.target.childElementCount == 0) {
                this.borrarInfo = false;
                elemento.style.display = "block";
                elemento.style.width = "40%";
                evt.target.appendChild(elemento);
                if (elementoId == "50") {   // Caso particular para el segundo pez de 5 escamas siendo un primer pez en la pecera
                    this.actualizador(evt.target.id,"5");
                    return
                }
                this.actualizador(evt.target.id,elementoId);
            } else if (evt.target.childElementCount == 1) {
                elemento.style.display = "block";
                elemento.style.width = "40%";
                evt.target.appendChild(elemento);
                if (elementoId == "50") {   // Caso particular para el segundo pez de 5 escamas siendo un segundo pez en la pecera
                    this.actualizador2(evt.target.id,"5");
                    return
                }
                this.actualizador2(evt.target.id,elementoId)
            } else {
                return
            }
        },
        actualizador(ele,ids){  // actualiza la primera entrada de los array si es que aun no hay pez en la pecera. Pintamos los numeros por primera vez.
            if (ele == "pc1") {
                this.elementosArray.splice(0,1,parseInt(ids));
            } else if (ele == "pc2") {
                this.elementosArray1.splice(0,1,parseInt(ids));
            } else if (ele == "pc3") {
                this.elementosArray2.splice(0,1,parseInt(ids));
            } else if (ele == "pc4") {
                this.elementosArray3.splice(0,1,parseInt(ids));
            } else if (ele == "pc5") {
                this.elementosArray4.splice(0,1,parseInt(ids));
            } else if (ele == "pc6") {
                this.elementosArray5.splice(0,1,parseInt(ids));
            } else {
                return
            }
        },
        actualizador2(ele,ids){ // actualiza la segunda entrada de los array si es que ya se encuentra 1 pez en la pecera.
            if (ele == "pc1") {
                this.elementosArray.splice(1,1,parseInt(ids));
            } else if (ele == "pc2") {
                this.elementosArray1.splice(1,1,parseInt(ids));
            } else if (ele == "pc3") {
                this.elementosArray2.splice(1,1,parseInt(ids));
            } else if (ele == "pc4") {
                this.elementosArray3.splice(1,1,parseInt(ids));
            } else if (ele == "pc5") {
                this.elementosArray4.splice(1,1,parseInt(ids));
            } else if (ele == "pc6") {
                this.elementosArray5.splice(1,1,parseInt(ids));
            } else {
                return
            }
        }
    }
}

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
#peceras1{
    margin: 2.5rem 0 2.5rem 0;
}
.peceras2{
    margin: 1rem;
}
    .peces{
        height: 100px;
        background-color: none;
        display: flex;
        align-items: center;
    }
        .pezIns{
            width: 100%;
            cursor: pointer;
        }
.pP{
    display: flex;
    justify-content: center;
}
.pecera{
    height: 112px;
    width: 150px;
    background-color: transparent;
    /*border: 1px solid lightcoral;*/
    display: flex;
    align-items: center;
    position: absolute;
}
    .peceraImg{
        width: 150px;
    }
.alertas{
    margin-top: 1rem;
    background-color: lightyellow;
    border: 2px solid yellow;
    border-radius: 10px;
}
.alertas1{
    margin-top: 1rem;
    background-color: lightgreen;
    border: 2px solid green;
    border-radius: 10px;
}
</style>