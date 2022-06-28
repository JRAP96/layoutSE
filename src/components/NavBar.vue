<template>
<div>
    <header>
        <div id="titulo" class="row container-fluid">
            <div id="imagen" class="col-ms-12 col-md-5">
                <a href="#">
                    <img src="../assets/logo2.png" class="img-fluid" alt="Logo ABN">
                </a>
            </div>
            <div id="texto" class="col-ms-12 col-md-7 d-flex align-items-center">
                <p id="texto1" class="fs-1 text-end fw-bold text-lg-center">Plataforma Digital de los Algoritmos ABN</p>
            </div>
        </div>
    </header>
    <nav id="navegacion" class="navbar navbar-expand-md navbar-dark bg-info">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                    <li class="nav-item">
                        <a class="nav-link active fs-6 fw-bold" aria-current="page" href="#"><font-awesome-icon icon="fa-solid fa-user" /> Iniciar Sesión</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active fs-6 fw-bold" aria-current="page" href="#">Primer Eje</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active fs-6 fw-bold" aria-current="page" href="#">Segundo Eje</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input id="form1" class="form-control me-2" type="search" placeholder="¿Qué operación buscas?" aria-label="Search">
                    <button id="boton1" class="btn btn-outline-primary" type="submit">Buscar</button>
                </form>
            </div>
        </div>
    </nav>
</div>
</template>

<script>

export default {
    name: "NavBar"
}
</script>

<style scoped>
    #imagen{
        height: auto;
    }
    #texto{
        height: 40vw;
    }
        #texto1{
            padding-left: 1vw;
            padding-right: 5vw;
        }
img{
    width: 100%;
}
</style>