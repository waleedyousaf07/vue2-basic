<template>
  <div id="superheroes">
    <ul>
      <li v-for="superhero in superheroes" :key="superhero.title" @click="superhero.show = !superhero.show">
        <h2>{{ superhero.title }}</h2>
        <h3 v-show="superhero.show">{{ superhero.name }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // props: ['superheroes'], // we can use this prop in template and access this prop in our methods as we do with data properties
  
  // To validate the prop we can do instead
  props: {
    superheroes: {
      type: Array,
      required: true,
    }
  },
  data () {
    return {
      
    }
  },
  methods: {
    test: function () {
      console.log('aaaa', this.superheroes);
    }
  }
}
</script>

<style scoped>

#superheroes {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #323232;
  margin: 10px;
}

</style>
