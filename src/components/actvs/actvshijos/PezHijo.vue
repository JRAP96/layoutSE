<template>
    <div>
        <img :class="{mostrarPez : estilosVisible(), mostrarPez2: !estilosVisible()}" :src="cover(rutaP[sumaIni]+'.png')" alt="Pez y algunas escamas">
        <p class="fs-6">El pez de {{queEnew()}} escamas ahora tiene:</p>
        <p id="mostrarSuma">{{queEnew()}} + {{contadorNuevo}} = {{sumaIni}} escamas</p>
        <div id="alertSpace" v-if="alertsMethods()">
            {{alertMessage}}
        </div>
    </div>
</template>

<script>
export default {
    name: "PezHijo",
    props:{
        contador: Number,
        queE: Number,
        mostrarM: Boolean
    },
    data: function () {
        return {
            alertMessage: "Exito, conseguiste darle al pez sus 10 escamas",
            rutaP: ['0','1','2','3','4','5','6','7','8','9','10'],
            queEnew: function () {
                return this.queE
            },
            contadorNew: function() {
                return this.contador
            },
        }
    },
    computed: {
        sumaIni(){
            if((this.queEnew() + this.contadorNew())>10){
                alert("Ya le has puesto sus 10 escamas a ese pez");
                return 10;
            }
            return this.queEnew() + this.contadorNew();
        },
        contadorNuevo() {
            if (this.sumaIni >= 10) {
                return 10-this.queEnew()
            }
            return this.contadorNew()
        }
    },
    methods: {
        cover(url) {
            if (url !== ''){
                try {
                    url = require('../../../assets/imgA1/' + url)
                } catch (e) {
                    url = require('../../../assets/imgA1/0.png');
                }
            }
            else
                url = require('../../../assets/imgA1/0.png'); 
            return url;
        },
        alertsMethods() {
            if(this.sumaIni==10 && (this.queE==0 || this.queE==7 || this.queE==4)){
                return true
            } else {
                return false
            }
        },
        estilosVisible() {
            if (this.sumaIni==10) {
                return false
            } else {
                return true
            }
        }
    }
}
</script>

<style scoped>
.mostrarPez{
    width: 100%;
    height: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 3px solid yellow;
}
.mostrarPez2{
    border: 3px solid green;
    width: 100%;
    height: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
#alertSpace{
    background-color: lightgreen;
    text-align: center;
}
#mostrarSuma{
    font-weight: bold;
    font-size: 1.1rem;
}

</style>