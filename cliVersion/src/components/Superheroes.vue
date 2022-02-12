<template>
  <div id="superheroes">
    <ul>
      <li v-for="superhero in superheroes" :key="superhero" @click="superhero.show = !superhero.show">
        <h2>{{ superhero.title }}</h2>
        <h3 v-show="superhero.show">{{ superhero.name }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      superheroes: [
        { title: 'Batman', name: 'Bruce', show: false },
        { title: 'Wonder Woman', name: 'Dianna', show: false },
        { title: 'Superman', name: 'Kal El', show: false },
        { title: 'Flash', name: 'Barry', show: false },
        { title: 'Aquaman', name: 'Arthur', show: false },
      ],
    }
  },
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
