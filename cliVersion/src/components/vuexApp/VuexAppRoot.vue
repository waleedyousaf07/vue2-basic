<template>
  <div>
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from "./ProductListOne.vue";
import ProductListTwo from "./ProductListTwo.vue";

export default {
  name: 'App',
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo,
  },
  data () {
    return {

    }
  },
  methods: {

  },
}
</script>

<style>
body {
  font-family: Ubuntu;
  color: #555;
}
</style>
