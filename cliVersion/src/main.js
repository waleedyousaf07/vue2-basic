import Vue from 'vue'
import App from './App.vue'
// import SuperHeroesApp from './components/superheroes/SuperHeroesRoot.vue'

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
