import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'; // To make HTTP requests, we could use fetch etc aswell

export const bus = new Vue();

Vue.use(VueResource);

// Custom Directive, it has lifecycle hooks
Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value === 'wide') {
      el.style.maxWidth = '1200px';
    } else if (binding.value === 'narrow') {
      el.style.maxWidth = '600px';
    }
    if (binding.arg == 'column') {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});

// Filters
Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase();
});

// Main Vue instance
new Vue({
  el: '#app',
  render: h => h(App),
});
