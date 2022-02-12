<template>
  <div>
    <h1>List of Superheroes</h1>
    <ul>
      <li v-for="superhero in superheroes" :key="superhero">{{ superhero }}</li>
    </ul>
  </div>
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
h1 {
  color: green;
}
</style>
