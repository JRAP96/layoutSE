<template>
  <div id="app">
    <nav-bar/>
    <grid-cards/>
    <foo-ter/>
  </div>
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import FooTer from './components/FooTer.vue';
import NavBar from './components/NavBar.vue';
import GridCards from './components/GridCards.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooTer,
    GridCards
  }
}
</script>,

<style scoped>

</style>
