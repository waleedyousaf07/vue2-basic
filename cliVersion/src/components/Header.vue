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
      // this.title = 'Superheroes MCU'; 
      // instead of only updating the local porp's value (as its a primitive type not a referenced one, we would emit an event which will update the actual data)
      this.$emit('changeTitle', 'Superheroes MCU'); // first argument is the name of the event which parent will look for and the second is the data. The parent will listen with `v-on` where component is being called
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
