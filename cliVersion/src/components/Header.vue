<template>
  <header>
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
      // title: 'Superheroes',
    }
  },
  methods: {
    changeTitle: function () {
      this.title = 'Superheroes MCU'
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
