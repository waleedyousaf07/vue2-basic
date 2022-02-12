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

<style scoped>
/* these styles will be shared between all of the components as this would output as same. Even styles in the nested superheroes component will override if it'll have any */
h1 {
  color: purple;
}
</style>
