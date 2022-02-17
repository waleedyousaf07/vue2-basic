<template>
  <div>
    <keep-alive>
      <component :is="component"></component>
    </keep-alive>
    <button @click="component='app-form-one'"> Show form one</button>
    <button @click="component='app-form-two'"> Show form two</button>
  </div>
</template>

<script>
import FormOne from './FormOne.vue';
import FormTwo from './FormTwo.vue';

export default {
  components: {
    'app-form-one': FormOne,
    'app-form-two': FormTwo,
  },
  data () {
    return {
      component: 'app-form-one',
    }
  },
}
</script>

<style>

</style>
