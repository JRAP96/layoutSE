<template>
    <div>
        <p class="fs-2 text-primary text-center fw-bold">Cuántos litros de agua tiene de más el tinaco</p>
        <div id="intro" v-show="mostrarIntro">
            <p class="fs-3">
                <span class="text-primary">La resta ABN en un problema de comparación: </span> Da click en el boton "Comenzar" y mediante el formato de algoritmo ABN propuesto resuelve la resta que se plantea para saber cuántos litros de agua tiene el tinaco.
            </p>
            <img src="../../assets/imgA5/school.png" class="img-fluid" alt="Escuela Primaria">
        </div>
        <div id="problema" v-show="!mostrarIntro">
            <p class="fs-3" id="enunciado">La escuela primaria donde estudio tiene dos tinacos de agua para los baños. Actualmente uno esta más lleno que el otro y es importante saber cuál es la diferencia en litros de agua entre estos tinacos.<br>
            El tinaco más lleno tiene <strong>{{this.x}} litros de Agua</strong> mientras que el más vacio tiene <strong>{{this.resta}} litros de agua</strong>. <span id="question">Ayúdanos a calcular la diferencia de agua entre los tinacos.</span></p>
            <div id="contenidoRI">
                <formato-resta v-if="!mostrarIntro" @objAct="actualizarObj" :resta="resta" :x="x" :y="y" :tituloMin="'Tinaco +lleno'" :tituloSus="'Tinaco -lleno'"/>
                <div>
                    <resta-input v-if="preguntarResta" :x="x" :y="resta" :resta="y" :pregunta="'Entonces, ¿Cuál es la diferencia de agua entre los tinacos? Escribe la resta completa que te lleva a la solución que obtuviste.'"/>
                    <div id="imagenessvg">
                        <svg xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://web.resource.org/cc/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg" xmlns:ns1="http://sozi.baierouge.fr" xmlns:xlink="http://www.w3.org/1999/xlink" width="120px" id="svg3771" sodipodi:docname="glass_water.svg" viewBox="0 0 315.26 481.28" sodipodi:version="0.32" version="1.0" inkscape:version="0.44.1" sodipodi:docbase="/home/william">
                        <sodipodi:namedview xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" id="base" bordercolor="#666666" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:pageshadow="2" guidetolerance="10" pagecolor="#ffffff" gridtolerance="10000" inkscape:window-height="584" inkscape:zoom="0.35" objecttolerance="10" borderopacity="1.0" inkscape:current-layer="layer1" inkscape:cx="375" inkscape:cy="520" inkscape:window-y="48" inkscape:window-x="3" inkscape:window-width="898" inkscape:pageopacity="0.0" inkscape:document-units="px"/>
                        <g id="layer1" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:label="Layer 1" inkscape:groupmode="layer" transform="translate(-162.37 -257.44)">
                            <g id="g3706" transform="translate(-247.81 226.43)">
                                <path id="path3718" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" sodipodi:nodetypes="ccsss" style="color:black;stroke:black;stroke-width:.59098;fill:none" d="m725.15 85.468v369.18c0 31.65-70.43 57.34-157.21 57.34-86.77 0-157.46-25.69-157.46-57.34v-369.18"/>
                                <path id="path1" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" sodipodi:nodetypes="ccscccscc" style="color:black;stroke:black;stroke-width:2;fill:#1be4e4" d="m421.77 129.57c0 0.02-5.02-8.68 8.91-30.441 13.92-21.76 70.15-38.053 137.32-38.053 66.82 0 122.81 16.123 137.1 37.712 14.3 21.592 8.77 30.802 8.77 30.802v311.12c0 26.68-65.38 48.33-145.94 48.33-80.55 0-146.17-21.65-146.17-48.33 0 0 0-311.17 0.01-311.14z"/>
                                <path id="path2" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" sodipodi:nodetypes="cs" style="color:black;stroke:black;stroke-width:2;fill:none" d="m422.42 129.79c45.15 64.57 251.81 75.81 291.68-0.16"/>
                                <path id="path3710" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" sodipodi:rx="132.85715" sodipodi:ry="48.57143" style="color:black;stroke:black;stroke-width:0.5;fill:none" sodipodi:type="arc" d="m482.86 426.65a132.86 48.571 0 1 1 -265.72 0 132.86 48.571 0 1 1 265.72 0z" transform="matrix(1.0585 0 0 1 197.51 -338)" sodipodi:cy="426.64789" sodipodi:cx="350"/>
                                <path id="path3708" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" sodipodi:rx="132.85715" sodipodi:ry="48.57143" style="color:black;stroke:black;stroke-width:0.5;fill:none" sodipodi:type="arc" d="m482.86 426.65a132.86 48.571 0 1 1 -265.72 0 132.86 48.571 0 1 1 265.72 0z" transform="matrix(1.1833 0 0 1.1806 153.8 -415.07)" sodipodi:cy="426.64789" sodipodi:cx="350"/>
                            </g>
                        </g>
                        </svg>
                        <svg xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://web.resource.org/cc/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg" xmlns:ns1="http://sozi.baierouge.fr" xmlns:xlink="http://www.w3.org/1999/xlink" width="120px" id="svg3772" sodipodi:docname="glass_water.svg" viewBox="0 0 315.26 481.28" sodipodi:version="0.32" version="1.0" inkscape:version="0.44.1" sodipodi:docbase="/home/william">
                            <sodipodi:namedview xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" id="base" bordercolor="#666666" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:pageshadow="2" guidetolerance="10" pagecolor="#ffffff" gridtolerance="10000" inkscape:window-height="584" inkscape:zoom="0.35" objecttolerance="10" borderopacity="1.0" inkscape:current-layer="layer1" inkscape:cx="375" inkscape:cy="520" inkscape:window-y="48" inkscape:window-x="3" inkscape:window-width="898" inkscape:pageopacity="0.0" inkscape:document-units="px"/>
                            <g id="layer1" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:label="Layer 1" inkscape:groupmode="layer" transform="translate(-162.37 -257.44)">
                                <g id="g3706" transform="translate(-247.81 226.43)">
                                    <path id="path3718" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" sodipodi:nodetypes="ccsss" style="color:black;stroke:black;stroke-width:.59098;fill:none" d="m725.15 85.468v369.18c0 31.65-70.43 57.34-157.21 57.34-86.77 0-157.46-25.69-157.46-57.34v-369.18"/>
                                    <path id="path3" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" sodipodi:nodetypes="ccscccscc" style="color:black;stroke:black;stroke-width:2;fill:#1be4e4" d="m421.77 129.57c0 0.02-5.02-8.68 8.91-30.441 13.92-21.76 70.15-38.053 137.32-38.053 66.82 0 122.81 16.123 137.1 37.712 14.3 21.592 8.77 30.802 8.77 30.802v311.12c0 26.68-65.38 48.33-145.94 48.33-80.55 0-146.17-21.65-146.17-48.33 0 0 0-311.17 0.01-311.14z"/>
                                    <path id="path4" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" sodipodi:nodetypes="cs" style="color:black;stroke:black;stroke-width:2;fill:none" d="m422.42 129.79c45.15 64.57 251.81 75.81 291.68-0.16"/>
                                    <path id="path3710" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" sodipodi:rx="132.85715" sodipodi:ry="48.57143" style="color:black;stroke:black;stroke-width:0.5;fill:none" sodipodi:type="arc" d="m482.86 426.65a132.86 48.571 0 1 1 -265.72 0 132.86 48.571 0 1 1 265.72 0z" transform="matrix(1.0585 0 0 1 197.51 -338)" sodipodi:cy="426.64789" sodipodi:cx="350"/>
                                    <path id="path3708" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" sodipodi:rx="132.85715" sodipodi:ry="48.57143" style="color:black;stroke:black;stroke-width:0.5;fill:none" sodipodi:type="arc" d="m482.86 426.65a132.86 48.571 0 1 1 -265.72 0 132.86 48.571 0 1 1 265.72 0z" transform="matrix(1.1833 0 0 1.1806 153.8 -415.07)" sodipodi:cy="426.64789" sodipodi:cx="350"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div style="width: 300px; margin: 0 auto; margin-top:2rem">
            <button v-show="mostrarIntro" type="button" class="btn btn-primary" @click="generarRandom">Comenzar</button>
            <router-link to="/"><span class="ligas">Ver Actividades</span></router-link>
        </div>
    </div>
</template>

<script>
import Snap from 'snapsvg-cjs'

import FormatoResta from "../actvs/actvshijos/FormatoResta.vue"
import RestaInput from "../actvs/actvshijos/RestaInput.vue"

export default {
    name: "ProblemaComparacion",
    components: {
        FormatoResta,
        RestaInput
    },
    data: function() {
        return {
            s: null, // Para el snap svg canvasTinaco 1
            o: null, // Para el snap svg canvasTinaco 2
            sP1: null,
            sP2: null,
            oP3: null,
            oP4: null,
            mostrarIntro: true,
            minAct: null,
            susAct: null,
            quitoAct: null,
            x: 0,   // Tinaco con más agua
            y: 0,   // Diferencia de agua
            resta: 0,   // Tinaco con menos agua
            textoT1: '',
            textoT2: '',
            preguntarResta: false,
        }
    },
    computed: {
        conversorLTM() {
            let valor =  this.minAct*0.001;
            return valor
        },
        conversorLTS() {
            let valor =  this.susAct*0.001;
            return valor
        },
    },
    methods: {
        generarRandom(){
            this.mostrarIntro = false;
            this.x = this.randomF(750,880);
            this.resta = this.randomF(500,650);
            this.y = this.x - this.resta;
            this.sP1.attr({fill:"green"});
            this.oP3.attr({fill:"pink"});
            this.sP2.attr({"stroke-width":2});
            this.oP4.attr({"stroke-width":2});
            this.s.text(130,170,this.x.toString()+' lt').attr({fill:"blue","font-size": "50","font-weight":"bold"});
            this.actualizarAT1(this.x*0.001);
            this.actualizarAT2(this.resta*0.001);
            //let esc = (481/880)*this.minAct; Para la escala vertical de la imagen s y colocar textos encima.
            this.textoT1 = this.s.text(100,410,' ').attr({fill:"black","font-size": "50","font-weight":"bold"});
            this.textoT2 = this.o.text(100,410,' ').attr({fill:"black","font-size": "50","font-weight":"bold"});
        },
        randomF(min,max) {
            let i = Math.floor((Math.random() * (max - min + 1)) + min);
            return i;
        },
        actualizarObj(minuendo,sustraendo,quito) {
            this.minAct = minuendo;
            this.susAct = sustraendo;
            this.quitoAct = quito;
            this.actualizarAT1(this.conversorLTM);
            this.actualizarAT2(this.conversorLTS);
            this.textoT1.attr({text:this.minAct.toString()+' lt'});
            this.textoT2.attr({text:this.susAct.toString()+' lt'});
            this.preguntaShow() // Para mostrar la pregunta de la resta al final
        },
        actualizarAT1(ltm){
            let vF1 = -36974*Math.pow(ltm,5)+118902*Math.pow(ltm,4)-147981*Math.pow(ltm,3)+89644*Math.pow(ltm,2)-27254*ltm +3658.6;
            let vF2 = -56214*Math.pow(ltm,5)+182473*Math.pow(ltm,4)-229524*Math.pow(ltm,3)+140801*Math.pow(ltm,2)-43482*ltm +5940.5;
            this.sP1.transform("s1,"+ltm+" t0,"+vF1);
            this.sP2.transform("s1,"+ltm+" t0,"+vF2);
        },
        actualizarAT2(lts){
            if (lts<=0.09) {
                let vF1 = (175.48*lts)**-1.005;
                this.oP3.transform("s1,"+lts+" t0,"+vF1*30000);
                this.oP4.transform("s1,"+lts+" t0,"+vF1*3000);
                return
            }
            let vF1 = -36974*Math.pow(lts,5)+118902*Math.pow(lts,4)-147981*Math.pow(lts,3)+89644*Math.pow(lts,2)-27254*lts +3658.6;
            let vF2 = -56214*Math.pow(lts,5)+182473*Math.pow(lts,4)-229524*Math.pow(lts,3)+140801*Math.pow(lts,2)-43482*lts +5940.5;
            this.oP3.transform("s1,"+lts+" t0,"+vF1);
            this.oP4.transform("s1,"+lts+" t0,"+vF2);
        },
        preguntaShow() {
            if (this.susAct == 0 && this.minAct == this.y) {
                this.preguntarResta = true;
            }
            return
        }
    },
    mounted: function() {
        let sC = Snap("#svg3771");
        this.s = sC;
        let oC = Snap("#svg3772");
        this.o = oC;
        let p1 = Snap("#path1");
        this.sP1 = p1;
        let p2 = Snap("#path2");
        this.sP2 = p2;
        let p3 = Snap("#path3");
        this.oP3 = p3;
        let p4 = Snap("#path4");
        this.oP4 = p4;
    }
}
</script>

<style scoped>
#contenidoRI{
    display: flex;
    justify-content: space-around;
}
    #imagenessvg{
        width: 330px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
#question{
    font-weight: bold;
    color: rgb(50, 128, 50);
}
#enunciado,#intro{
    margin-right: 2rem;
    margin-left: 2rem;
}

@media (max-width:768px) {
    #contenidoRI{
        justify-content: space-between;
    }
    #imagenessvg{
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
}
@media (max-width:740px) {
    #contenidoRI{
        flex-direction: column;
        align-items: center;
    }
}

</style>