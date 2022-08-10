<template>
    <div>
        <p class="fs-2 text-primary text-center fw-bold">Cuántos gramos de golosinas me faltan para tener tantos como tiene mi amigo</p>
        <div id="intro" v-show="mostrarIntro">
            <p class="fs-3">
                <span class="text-primary">La resta ABN en un problema de igualación: </span> Da click en el boton "Comenzar" y resuelve el problema. Auxiliate del formato de la resta ABN, calcula cuántos gramos de dulces le faltan a mi bolsa y ayudame a tener tantos gramos como tiene mi amigo.
            </p>
            <img src="../../assets/imgA6/gomitas.png" class="img-fluid" alt="Escuela Primaria">
        </div>
        <div id="problema" v-show="!mostrarIntro">
            <p class="fs-3" id="enunciado">Estoy con mi amigo comprando golosinas que venden en el mercado pero el vendedor sirve las golosinas muy mal. La bolsa de golosinas de mi amigo se siente más llena que la mía y ambos compramos {{this.x}} gramos.<br>
            Al decirle eso al vendedor ha colocado las dos bolsas de golosinas en una balanza para compararlas, porque él esta seguro que a mi amigo sí le sirvio bien, y efectivamente no está equilibrada. La bolsa de mi amigo sí tiene <strong>{{this.x}} gramos de golosinas</strong> mientras que mi bolsa tiene <strong>{{this.resta}} gramos</strong>.<br><span id="question">Ayudale al vendedor a calcular cuántos gramos de golosinas le hacen falta a mi bolsa para tener tantos como mi amigo mediante el formato de la resta ABN y equilibra la balanza.</span></p>
            <div id="contenidoRI">
                <formato-resta v-if="!mostrarIntro" @objAct="actualizarObj" :x="this.x" :y="this.y" :resta="this.resta" :tituloMin="'Golosinas amigo'" :tituloSus="'Mis golosinas'"/>
                <div id="retroA">
                    <div style="width=300px">
                        <p id="pregunt" class="fs-5 text-center" v-show="mostrarReflex"><span class="text-primary fw-bold">Reflexión:</span> ¿Porqué no se mueve balanza cada vez que validas? <br> Termina correctamente la resta ABN con este formato y continua aquí mismo.</p>
                    </div>
                    <div class="form-floating mb-3" v-show="mostrarPregunta">
                        <input type="number" class="form-control" id="floatingInput" placeholder="Auxiliate de la resta ABN" v-model.number="recibirResta" onkeypress="return event.charCode >= 48 && event.charCode <= 57" min="0" max="200" style="height: 100px; border: 2px solid blue; padding-top:80px; font-weight:bold; font-size:1.5rem; text-align: center">
                        <label for="floatingInput">Entonces, ¿Cuántos gramos se necesitan para igualar ambas bolsas a 250g? Escribe aquí tu respuesta y nivela la balanza.</label>
                        <button type="button" class="btn btn-primary btn-sm" @click="validarRespuesta">
                            <span v-if="indicador1">Prueba tu respuesta</span>
                            <span v-if="!indicador1">{{indicador2?"Correcto!!!... Finalmente escribe tu resta abajo":"Intenta nuevamente, revisa la resta."}}</span>
                        </button>
                    </div>
                    <svg width="350px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="egsWaYi2BA91" viewBox="0 0 297.25 230.88" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                        <defs>
                            <radialGradient id="egsWaYi2BA910-fill" cx="0" cy="0" r="0.5" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="matrix(0.999189 -0.040263 0.076436 1.896891 0.50696 0)"><stop id="egsWaYi2BA910-fill-0" offset="0%" stop-color="#dbeaba"/><stop id="egsWaYi2BA910-fill-1" offset="100%" stop-color="#241545"/></radialGradient><radialGradient id="egsWaYi2BA914-fill" cx="0" cy="0" r="0.5" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="matrix(0.999189 -0.040263 0.076436 1.896891 0.50696 0)"><stop id="egsWaYi2BA914-fill-0" offset="0%" stop-color="#dbeaba"/><stop id="egsWaYi2BA914-fill-1" offset="100%" stop-color="#241545"/></radialGradient>
                        </defs>
                        <g transform="translate(-11.439-7.3467)"><path d="M56.889,77.37c-.198,0-.395,0,0,0Z" fill="none" stroke="none" stroke-width="10" stroke-linecap="round"/>
                        <path d="M173.04,51.296c0,7.856251-6.368749,14.225-14.225,14.225s-14.225-6.368749-14.225-14.225s6.368749-14.225,14.225-14.225s14.225,6.368749,14.225,14.225Z" transform="translate(1.1852-4.7407)" fill="none" stroke="#1a1a1a" stroke-width="10" stroke-linecap="round"/><path d="M160.59,59L160,233.22" fill-opacity="0.75" fill-rule="evenodd" stroke="#1a1a1a" stroke-width="10"/><path d="M30.017,230.65l261.15.41" fill-opacity="0.75" fill-rule="evenodd" stroke="#1a1a1a" stroke-width="10.183"/>
                        </g>
                        <g xmlns="http://www.w3.org/2000/svg" id="sistemaG" transform="matrix(.965926 0.258819-.258819 0.965926 15.843741-37.18686)">
                            <g xmlns="http://www.w3.org/2000/svg" id="sistemaG1" transform="matrix(.965926-.258819 0.258819 0.965926-16.581268 14.09936)">
                                <path d="M13.45,150.02L46.043,68.838L79.821,152.39" fill="none" stroke="#1a1a1a" stroke-width="8.6" stroke-linecap="round" stroke-linejoin="round"/><ellipse rx="38.07325" ry="15.6487" transform="matrix(1 0 0 1.253496 46.1055 153.5444)" fill="url(#egsWaYi2BA910-fill)" stroke="#090404"/><path d="M45.256995,133.928817L45.45,68.8383" transform="translate(.000001 0.000001)" fill="none" stroke="#1b1a1b" stroke-width="8"/>
                            </g>
                            <g xmlns="http://www.w3.org/2000/svg" id="sistemaG2" transform="matrix(.965926-.258819 0.258819 0.965926 5.175895 65.584812)">
                                <path d="M219.08,94.32l32.59-81.185L285.45,96.69" fill="none" stroke="#1a1a1a" stroke-width="8.6" stroke-linecap="round" stroke-linejoin="round"/><ellipse rx="38.07325" ry="15.6487" transform="matrix(1 0 0 1.253496 251.671 101.38356)" fill="url(#egsWaYi2BA914-fill)" stroke="#090404"/>
                                <path d="M45.256995,133.928817L45.45,68.8383" transform="translate(207.008005-52.16084)" fill="none" stroke="#1b1a1b" stroke-width="8"/>
                            </g>
                            <path d="M45.256995,70.0233L251.671,13.135" transform="translate(.000001 0)" fill="none" stroke="#1b1a1b" stroke-width="8" id="barra"/>
                        </g>
                        <g clip-path="url(#egsWaYi2BA920)">
                            <path d="M-33.979,48.926c0,20.752-18.73,37.595-41.808,37.595s-41.803-16.843-41.803-37.595s18.725-37.595,41.803-37.595s41.808,16.843,41.808,37.595Zm0-4h-83.611" transform="translate(121.89 97.542)" fill="#1a1a1a" stroke="#1a1a1a" stroke-width="8.6" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M-33.979,48.926c0,20.752-18.73,37.595-41.808,37.595s-41.803-16.843-41.803-37.595s18.725-37.595,41.803-37.595s41.808,16.843,41.808,37.595Zm0-4h-83.611" transform="translate(326.93 45.394)" fill="#1a1a1a" stroke="#1a1a1a" stroke-width="8.6" stroke-linecap="round" stroke-linejoin="round"/>
                            <clipPath id="egsWaYi2BA920"><rect width="103.7" height="58.074" rx="0" ry="0" transform="translate(-129.19 43.593)" fill="none" stroke="#f00" stroke-width="8.6" stroke-linecap="round" stroke-linejoin="round"/>
                            </clipPath>
                        </g>
                    </svg>
                    <resta-input v-if="preguntarResta" :x="x" :y="resta" :resta="y" :pregunta="'Entonces, ¿Cuántos gramos de golosinas le faltaban a mi bolsa para tener los mismos que mi amigo? Escribe la resta completa que te lleva a la solución que obtuviste.'"/>
                </div>
            </div>
        </div>
        <div style="width: 300px; margin: 0 auto; margin-top:2rem">
            <button type="button" class="btn btn-primary" @click="generarRandom">Comenzar</button>
            <router-link to="/"><span class="ligas">Ver Actividades</span></router-link>
        </div>
    </div>
</template>

<script>
import Snap from "snapsvg-cjs";
import FormatoResta from "../actvs/actvshijos/FormatoResta.vue";
import RestaInput from "../actvs/actvshijos/RestaInput.vue"

export default {
    name: "ProblemaIgualacion",
    components: {
        FormatoResta,
        RestaInput
    },
    data: function() {
        return {
            mostrarIntro: true,
            mostrarReflex: false,
            mostrarPregunta: false,
            indicador1: true,
            indicador2: true,
            x: 250, // Gramos de golosina amigo
            y: 0,   // diferencia en gramos
            resta: 0, // Mis gramos de golosina
            gGeneral: null, // g... son los grupos de vectores que haremos rotar
            gB1: null,
            gB2: null,
            text1: ' ',
            text2: ' ',
            minAct: null,
            susAct: null,
            quitoAct: null,
            recibirResta: null,
            preguntarResta: false,
        }
    },
    computed:{
        escala(){
            let numEscalado = 335+(40/250)*this.resta;
            return numEscalado
        },
        escalaHijo(){
            if (this.escala<=360) {
                let numEscalado = 25-(40/250)*this.resta;
                return numEscalado
            } else {
                let numEscalado = 385-(40/250)*this.resta;
                return numEscalado
            }
        }
    },
    methods: {
        randomF(min,max) {
            let i = Math.floor((Math.random() * (max - min + 1)) + min);
            return i;
        },
        generarRandom(){
            this.mostrarIntro = false;
            this.resta = this.randomF(50,230);
            this.y = this.x - this.resta;
            this.gGeneral.transform("r"+this.escala+",149.15,41.58");
            this.gB1.transform("r"+this.escalaHijo+",45.29,70.02");
            this.gB2.transform("r"+this.escalaHijo+",251.67,13.14");
            this.text1 = this.gB1.text(28,165,"250g").attr({fill:"green","font-size": "17","font-weight":"bold",stroke:"yellow","stroke-width":"0.4"});
            this.text2 = this.gB2.text(235,110,this.resta.toString()+"g").attr({fill:"green","font-size": "17","font-weight":"bold",stroke:"yellow","stroke-width":"0.4"});
        },
        actualizarObj(minuendo,sustraendo,quito){
            this.minAct = minuendo;
            this.susAct = sustraendo;
            this.quitoAct = quito;
            this.changeText();
            this.preguntaShow() // Para mostrar la pregunta de la resta al final
        },
        changeText(){
            this.text1.attr({text:this.minAct.toString()+'g'});
            this.text2.attr({text:this.susAct.toString()+'g'});
            this.mostrarReflex = true;
            if(this.susAct==0 && this.minAct==this.y){
                this.text1.animate({fill:"#13a8fe",stroke:"#ff00ff","stroke-width":"1"},4000);
                this.text2.animate({fill:"#13a8fe",stroke:"#ff00ff","stroke-width":"1"},4000);
                this.mostrarReflex = false;
                this.mostrarPregunta = true;
            }
        },
        validarRespuesta(){
            this.indicador1 = false;
            if (this.recibirResta == this.y) {
                this.indicador2 = true;
                this.gGeneral.animate({transform: "r"+15+",149.15,41.58"},4000);
                this.gB1.animate({transform: "r"+345+",45.29,70.02"},4000);
                this.gB2.animate({transform: "r"+345+",251.67,13.14"},4000);
                this.text1.attr({fill:"white",stroke:"blue","stroke-width":"1",text:'250g'});
                this.text2.animate({fill:"white",stroke:"blue","stroke-width":"1",text:'250g'},4000);
            }
            else {
                this.indicador2 = false;
            }
        },
        preguntaShow() {
            if (this.susAct == 0 && this.minAct == this.y) {
                this.preguntarResta = true;
            }
            return
        }
    },
    mounted: function() {
        let sC = Snap("#sistemaG");
        let sC1 = Snap("#sistemaG1");
        let sC2 = Snap("#sistemaG2");
        this.gGeneral = sC;
        this.gB1 = sC1;
        this.gB2 = sC2;
    }
}
</script>

<style scoped>
#enunciado,#intro{
    margin-right: 2rem;
    margin-left: 2rem;
    margin-bottom: 2rem;
}
#question{
    font-weight: bold;
    color: rgb(50, 128, 50);
}
#pregunt{
    width: 300px;
}
#contenidoRI{
    display: flex;
    justify-content: space-around;
}

@media (max-width:768px) {
    #contenidoRI{
        justify-content: space-between;
    }
}
@media (max-width:740px) {
    #contenidoRI{
        flex-direction: column;
        align-items: center;
    }
}
</style>