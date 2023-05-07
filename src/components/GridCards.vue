<template>
    <div id="rejillaCards" class="container container-lg">

        <h2 id="tit2eje">Ejercitate en los Algoritmos ABN</h2>

        <div class="accordion accordion-flush" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h3 id="tit2eje1">Problemas Aditivos-Sustractivos:</h3>
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="row">
                        <div class="col col-12 col-md-6">
                            <div class="card c1">
                                <img src="../assets/img/Act1SE.png" class="card-img-top" alt="Actividad ABN">
                                <div class="card-body">
                                    <h5 class="card-title">Los peces salen de viaje</h5>
                                    <p class="card-text">Vamos a ejercitarnos y abordar las parejas de números naturales menores a 10 que sumen precisamente una decena.</p>
                                    <router-link to="/complementoa10"><span class="ligas">Comenzar</span></router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col col-12 col-md-6">
                            <div class="card c1">
                                <img src="../assets/img/Act2SE.png" class="card-img-top" alt="Actividad ABN">
                                <div class="card-body">
                                    <h5 class="card-title">Los peces salen de viaje 2</h5>
                                    <p class="card-text">Continuamos con la historia de los peces cuyas escamas y el número 10 (la decena) estan muy relalacionados.</p>
                                    <router-link to="/complementoa102"><span class="ligas">Comenzar</span></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-12 col-md-4">
                            <div class="card c2">
                                <img src="../assets/img/Act3SE.png" class="card-img-top" alt="Actividad ABN">
                                <div class="card-body">
                                    <h5 class="card-title">Mi consumo de gasolina</h5>
                                    <p class="card-text">Resolveras un problema de cambio que implica hacer una resta. Haz la resta mediante el formato de algoritmo ABN y visualiza que ocurre.</p>
                                    <router-link to="/problemacambio"><span class="ligas">Comenzar</span></router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col col-12 col-md-4">
                            <div class="card c2">
                                <img src="../assets/img/Act4SE.png" class="card-img-top" alt="Actividad ABN">
                                <div class="card-body">
                                    <h5 class="card-title">Asientos en el autobus</h5>
                                    <p class="card-text">Resuelve haciendo la resta ABN mediante el formato propuesto. Ayudame a saber cuántos asientos disponibles tiene el autobus.</p>
                                    <router-link to="/problemacombinacion"><span class="ligas">Comenzar</span></router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col col-12 col-md-4">
                            <div class="card c2">
                                <img src="../assets/img/Act5SE.png" class="card-img-top" alt="Actividad ABN">
                                <div class="card-body">
                                    <h5 class="card-title">Agua en la escuela</h5>
                                    <p class="card-text">Ayuda al personal de la primaria a calcular cuántos litros más de agua tiene el tinaco más lleno comparado con el más vacio.</p>
                                    <router-link to="/problemacomparacion"><span class="ligas">Comenzar</span></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-12 col-md-4">
                            <div class="card c2">
                                <img src="../assets/img/Act6SE.png" class="card-img-top" alt="Actividad ABN">
                                <div class="card-body">
                                    <h5 class="card-title">Mis gasolinas</h5>
                                    <p class="card-text">Resolveras un problema mediante el formato para la resta ABN. Calcula la diferencia del contenido de ambas bolsas y logra igualar ambas cantidades.</p>
                                    <router-link to="/problemaigualacion"><span class="ligas">Comenzar</span></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <h3 id="tit2eje2">Problemas de Multiplicación-División:</h3>
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="row">
                        <div class="col col-12 col-md-6">
                            <div class="card c1">
                                <img src="../assets/img/gridcards.png" class="card-img-top" alt="Actividad ABN">
                                <div class="card-body">
                                    <h5 class="card-title">Problema de Repartos Equitativos</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Comenzar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col col-12 col-md-6">
                            <div class="card c1">
                                <img src="../assets/img/gridcards.png" class="card-img-top" alt="Actividad ABN">
                                <div class="card-body">
                                    <h5 class="card-title">Problema de Factor N</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Comenzar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-12 col-md-4">
                            <div class="card c2">
                                <img src="../assets/img/gridcards.png" class="card-img-top" alt="Actividad ABN">
                                <div class="card-body">
                                    <h5 class="card-title">Problema de Razón</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Comenzar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col col-12 col-md-4">
                            <div class="card c2">
                                <img src="../assets/img/gridcards.png" class="card-img-top" alt="Actividad ABN">
                                <div class="card-body">
                                    <h5 class="card-title">Problema de Producto Cartesiano</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Comenzar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col col-12 col-md-4">
                            <div class="card c2">
                                <img src="../assets/img/gridcards.png" class="card-img-top" alt="Actividad ABN">
                                <div class="card-body">
                                    <h5 class="card-title">Sin Problema</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Comenzar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import ComplementoA10 from '../components/actvs/ComplementoA10.vue'

export default {
    name: 'GridCards',
    components: {
        //ComplementoA10
    }
}
</script>

<style scoped>

#tit2eje{
    text-align: center;
    margin: 2rem;
    text-decoration: underline orange;
}
#rejillaCards{
    margin: 0 auto;
    margin-top: 2rem;
    border: 2px solid blue;
    border-radius: 30px;
}
    .accordion-button{
        border: solid lightblue;
        margin-bottom: 10px;
    }
    .c1{
        margin: 0 auto;
        margin-top: 1rem;
        margin-bottom: 1rem;
        width: 350px;
        border: 2px blue solid;
    }
    .c2{
        margin: 0 auto;
        margin-top: 1rem;
        margin-bottom: 1rem;
        width: 230px;
        border: 2px blue solid;
    }
</style>