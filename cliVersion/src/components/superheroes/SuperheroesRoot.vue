<template>
  <div>
    <app-header :title="title" @changeTitle="updateTitle($event)"></app-header>
    <app-superheroes :superheroes="superheroes"></app-superheroes> <!-- dont pass strings as values of props, instead bind them -->
    <app-footer :title="title"></app-footer>
  </div>
</template>

<script>
import Header from './Header.vue';
import Superheroes from './Superheroes.vue';
import Footer from './Footer.vue';

export default {
  components: {
    'app-header': Header, // reason for not only saying header is that its already pre occupied as its an element/tag
    'app-superheroes': Superheroes,
    'app-footer': Footer,
  },
  data () {
    return {
      title: 'Superheroes',
      superheroes: [
        { title: 'Batman', name: 'Bruce', show: false },
        { title: 'Wonder Woman', name: 'Dianna', show: false },
        { title: 'Superman', name: 'Kal El', show: false },
        { title: 'Flash', name: 'Barry', show: false },
        { title: 'Aquaman', name: 'Arthur', show: false },
      ],
    }
  },
  methods: {
    updateTitle: function (updatedTitle) { // received from event listener where passed `$event`
      this.title = updatedTitle;
    }
  },
}
</script>

<style>

</style>
