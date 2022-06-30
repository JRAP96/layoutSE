<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-8 col-md-6">
                    <div id="escamasB">
                        <div id="escamasB2">
                            <img draggable class="escam" src="../../assets/imgA1/escama.png" alt="Toma 1 escama" @dragstart="startDrag($event)">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-6 col-md-2">
                    <div id="0" class="peces" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent>
                        0
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div id="1" class="peces" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent>
                        1
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div id="2" class="peces" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent>
                        2
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div id="3" class="peces" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent>
                        3
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div id="4" class="peces" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent>
                        4
                    </div>
                </div>
            </div>
            <div class="row justify-content-center justify-content-md-end">
                <div class="col-6 col-md-7">
                    <div>
                            <p class="fs-6">El pez de {{idCaida}} escamas ahora tiene:</p>
                            <p>{{idCaida}} + {{counter}} = {{sumaIni}} escamas</p>
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div id="10" class="peces" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent>
                        10
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-6 col-md-2">
                    <div id="5" class="peces" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent>
                        5
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div id="6" class="peces" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent>
                        6
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div id="7" class="peces" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent>
                        7
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div id="8" class="peces" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent>
                        8
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div id="9" class="peces" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent>
                        9
                    </div>
                </div>
            </div>
        </div>
        <br>
        <router-link to="/"><span class="ligas">Ver Actividades</span></router-link>
    </div>
</template>

<script>
export default {
    name: "ComplementoA10",
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
            this.counter++
            console.log(this.idCaida,typeof(this.idCaida),evt.target.id);
        },
    },
    data: () => ({
        idCaida: 0,
        counter: 0,
    }),
    computed: {
        sumaIni() {
            return this.idCaida + this.counter;
        }
        
    }
};
</script>

<style scoped>
#escamasB{
    height: 200px;
    background-color: transparent;
    margin: 1rem;
}
    #escamasB2{
        width: 120px;
        height: 120px;
        background-color: lightcyan;
        margin: 0 auto;
    }
        img.escam{
            width: 120px;
        }
.peces{
    width: 100px;
    height: 200px;
    background-color: lightblue;
    margin: 0.5rem;
    background-image: url("../../assets/imgA1/escama.png");
}
</style>