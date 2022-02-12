<template>
  <div>
    <app-header></app-header>
    <superheroes></superheroes>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Superheroes from './components/Superheroes.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    'app-header': Header, // reason for not only saying header is that its already pre occupied as its an element/tag
    'superheroes': Superheroes,
    'app-footer': Footer,
  },
  data () {
    return {

    }
  },
}
</script>

<style>

</style>
