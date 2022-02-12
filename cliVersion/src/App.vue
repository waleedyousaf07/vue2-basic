<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Your first Vue file',
    }
  },
  methods: {
    greeting: function () {
      return 'Heyy you';
    },
  },
}
</script>

<style>

</style>
