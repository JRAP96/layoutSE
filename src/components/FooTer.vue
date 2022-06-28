<template>
    <footer id="footer" class="container-fluid">
        <div class="container">
            <div id="footerTexto" class="row">
                <div id="footerimg1" class="col-6 col-md-2">
                    <img src="../assets/img/logocinves.png" alt="Cinvestav">
                </div>
                <div id="footerimg2" class="col-6 col-md-2">
                    <img src="../assets/img/logodme.jpg" alt="DME">
                </div>
                <div id="footerteorico" class="col-6 col-md-4">
                    <p class="fw-light">Trabajo Teórico</p>
                    <p class="fw-light">Referencias</p>
                    <p class="fw-light">Páginas amigas</p>
                    <p class="fw-light">Otros enlaces</p>
                </div>
                <div id="footernosotros" class="col-6 col-md-4">
                    <p class="fw-light">Nosotros</p>
                    <p class="fw-light">CINVESTAV - DME</p>
                    <p class="fw-light">Contacto</p>
                </div>
            </div>
        </div>
        <div id="footerIconos" class="container-fluid">
            <font-awesome-icon icon="fa-solid fa-house" />
            <font-awesome-icon icon="fa-brands fa-facebook" />
            <font-awesome-icon icon="fa-brands fa-twitter" />
            <font-awesome-icon icon="fa-brands fa-google-drive" />
            <font-awesome-icon icon="fa-brands fa-blogger" />
            <p class="fw-light">Cinvestav - DME - Tecnologías Digitales</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooTer"
}
</script>

<style scoped>
#footer{
    height: auto;
    background-color: white;
}
    #footerTexto{
        margin-top: 2vw;
        padding-top: 2vw;
        border-top: 2px blue solid;
    }
    #footerIconos{
        margin-top: 2vw;
        padding-top: 2vw;
        border-top: 2px blue solid;
        text-align: center;
    }
#padre{
    height: 50px;
}
img{
    width: 100%;
}
</style>
