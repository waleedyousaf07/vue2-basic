<template>
  <ul>
    <li v-for="superhero in superheroes" :key="superhero">{{ superhero }}</li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      superheroes: ['Batman', 'Wonder Woman', 'Superman'],
    }
  },
}
</script>

<style>

</style>
