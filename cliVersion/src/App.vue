<template>
  <div>
    <app-header></app-header>
    <app-superheroes :superheroes="superheroes"></app-superheroes> <!-- dont pass strings as values of props, instead bind them -->
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
    'app-superheroes': Superheroes,
    'app-footer': Footer,
  },
  data () {
    return {
      superheroes: [
        { title: 'Batman', name: 'Bruce', show: false },
        { title: 'Wonder Woman', name: 'Dianna', show: false },
        { title: 'Superman', name: 'Kal El', show: false },
        { title: 'Flash', name: 'Barry', show: false },
        { title: 'Aquaman', name: 'Arthur', show: false },
      ],
    }
  },
}
</script>

<style>

</style>
