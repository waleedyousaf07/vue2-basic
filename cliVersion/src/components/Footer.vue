<template>
  <footer>
    <p>{{ copyright }}</p>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      copyright: 'Copyright 2022 Rendevous',
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
