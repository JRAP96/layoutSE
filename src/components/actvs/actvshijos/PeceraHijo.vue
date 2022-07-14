<template>
    <div>
        <img class="peceraImg" src="../../../assets/imgA2/peceRa.png" alt="Aqui van los peces" draggable="false">
        <p class="alertas2" v-if="indicadorM5new()">Pez 1: Cantidad de escamas del <font-awesome-icon icon="fa-solid fa-fish" /> 1<br>Pez 2: Cantidad de escamas del <font-awesome-icon icon="fa-solid fa-fish" /> 2</p>
        <p class="alertas">{{elementosArray()[0]}} + {{elementosArray()[1]}} = <span :class="{mEscamas1 : indicadorM6, mEscamas2: !indicadorM6}">{{sumarR()}}</span></p>
        <p class="alertas" v-if="indicadorM4">Aún no suman 10 escamas</p>
        <p class="alertas1" v-if="indicadorM3">Bien hecho. Juntaste a los peces que suman 10 escamas.</p>
        <p class="alertas" v-if="indicadorM2">Recuerda que debes juntar dos peces para que sus escamas junten 10. No más.</p>
    </div>
</template>

<script>
export default {
    name: "PeceraHijo",
    props: {
        elementsArray: Array,
        indicadorM5: {
            type: Boolean,
            default: true,
        }
    },
    data: function () {
        return {
            indicadorM2: false,
            indicadorM3: false,
            indicadorM4: false,
            indicadorM6: false,
            indicadorM5new: function () { 
                return this.indicadorM5
            },
            sumaArray: 0,
            elementosArray: function () { 
                return this.elementsArray
            },
        }
    },
    methods: {
        sumarR() {
            if (this.elementosArray()[1] == "Pez 2" && this.elementosArray()[0]== "Pez 1") {
                this.indicadorM6 = false;
                this.indicadores(0);
                return "...Esperando"
            } else if (this.elementosArray()[1] == "Pez 2" && this.elementosArray()[0]!= "Pez 1") {
                this.indicadorM6 = true;
                this.indicadores(0);
                return this.elementosArray()[0]
            }
            this.indicadorM6 = true;
            this.sumaArray = this.elementosArray()[0] + this.elementosArray()[1];
            this.indicadores(this.sumaArray);
            return this.sumaArray
        },
        indicadores(num) {
            if (num<10 && num!=0) {
                this.indicadorM4 = true;
                this.indicadorM3 = false;
                this.indicadorM2 = false;
            } if (num==0) {
                this.indicadorM4 = false;
                this.indicadorM3 = false;
                this.indicadorM2 = false;
            } if (num>10) {
                this.indicadorM2 = true;
                this.indicadorM3 = false;
                this.indicadorM4 = false;
            } if (num==10) {
                this.indicadorM2 = false;
                this.indicadorM4 = false;
                this.indicadorM3 = true;
            }
            return
        }
    },
}
</script>

<style scoped>
    .peceraImg{
        width: 150px;
    }
.mEscamas1{
    color: black;
}
.mEscamas2{
    animation-name: parpadeo;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    -webkit-animation-name:parpadeo;
    -webkit-animation-duration: 2s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
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
.alertas2{
    margin-top: 1rem;
    background-color: none;
    border: 2px solid none;
}

@-moz-keyframes parpadeo{  
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
    100% { opacity: 1.0; }
}

@-webkit-keyframes parpadeo {  
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
    100% { opacity: 1.0; }
}

@keyframes parpadeo {  
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
    100% { opacity: 1.0; }
}
</style>