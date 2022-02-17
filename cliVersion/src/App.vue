<template>
  <div>
    <!-- <h1>Vue App</h1> -->
    <!-- <app-superheroes-root :title="title" @changeTitle="updateTitle($event)"></app-superheroes-root> -->
    <app-form-helper-root :title="title" @changeTitle="updateTitle($event)"></app-form-helper-root>
  </div>
</template>

<script>
import SuperheroesRoot from './components/superheroes/SuperheroesRoot.vue';
import FormHelperRoot from './components/formHelper/FormHelperRoot.vue';

export default {
  components: {
    'app-superheroes-root': SuperheroesRoot,
    'app-form-helper-root': FormHelperRoot,
  },
  data () {
    return {

    }
  },
}
</script>

<style>

</style>
