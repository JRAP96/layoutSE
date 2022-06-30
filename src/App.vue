<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
    <foo-ter/>
  </div>
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import FooTer from './components/FooTer.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooTer,
  }
}
</script>,

<style>
.ligas{
  font-size: 1.2rem;
  border: lightgreen 2px solid;
  border-radius: 20px;
  padding: 5px;
  color: blue;
  background-color: rgba(144, 238, 144,0.3);
}
.ligas:hover{
  background-color: rgba(144, 238, 144,0.5);
}
</style>
