<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  data () {
    return {
      title: 'Superheroes',
    }
  },
}
</script>

<style scoped>
header {
  background: #323232;
  padding: 10px;
}

h1 {
  color: #fff;
  text-align: center;
}
</style>
