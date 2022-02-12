<template>
  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
      copyright: 'Copyright 2022',
    }
  },
}
</script>

<style scoped>
footer {
  background: #fff;
  padding: 6px;
}

p {
  color: #323232;
  text-align: center;
}
</style>
