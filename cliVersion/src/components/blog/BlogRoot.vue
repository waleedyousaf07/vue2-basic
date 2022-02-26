<template>
  <div>
    <!-- <add-blog></add-blog> -->
    <show-blogs></show-blogs>
    <list-blogs></list-blogs>
  </div>
</template>

<script>
import AddBlog from './AddBlog.vue';
import ShowBlogs from './ShowBlogs.vue';
import ListBlogs from './ListBlogs.vue';

export default {
  components: {
    'add-blog': AddBlog,
    'show-blogs': ShowBlogs,
    'list-blogs': ListBlogs,
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
