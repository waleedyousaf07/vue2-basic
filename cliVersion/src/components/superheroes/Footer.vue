<template>
  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>
</template>

<script>
import { bus } from '../../main';

export default {
  props: ['title'],
  data () {
    return {
      copyright: 'Copyright 2022',
    }
  },
  created() { // lifecycle hook
    bus.$on('titleChanged', (data) => {
      this.title = data;
    });
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
