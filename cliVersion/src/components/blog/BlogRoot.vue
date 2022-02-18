<template>
  <div>
    <component :is="component">
      <add-blog></add-blog>
      <show-blogs></show-blogs>
    </component>
  </div>
</template>

<script>
import AddBlog from './AddBlog.vue';
import ShowBlogs from './ShowBlogs.vue';

export default {
  components: {
    'add-blog': AddBlog,
    'show-blogs': ShowBlogs,
  },
  data () {
    return {
      component: 'show-blogs',
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
