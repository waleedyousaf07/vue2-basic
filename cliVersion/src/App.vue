<template>
  <div>
    <h1>{{ title }}</h1>
    <superheroes></superheroes>
  </div>
</template>

<script>
import Superheroes from './Superheroes.vue'

export default {
  components: {
    'superheroes': Superheroes,
  },
  data () {
    return {
      title: 'Super App',
    }
  },
}
</script>

<style>

</style>
