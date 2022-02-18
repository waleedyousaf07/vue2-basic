<template>
  <div>
    <add-blog></add-blog>
  </div>
</template>

<script>
import AddBlog from './AddBlog.vue';

export default {
  components: {
    'add-blog': AddBlog,
  },
  data () {
    return {

    }
  },
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>
