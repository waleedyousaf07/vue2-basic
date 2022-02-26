<template>
  <div>
    <top-nav-bar :component="component" @changePage="updatePage($event)"></top-nav-bar>
    <component :is="component">
      <add-blog></add-blog>
      <show-blogs></show-blogs>
      <list-blogs></list-blogs>
    </component>
  </div>
</template>

<script>
import TopNavBar from '../topNavBar/TopNavBar.vue';
import AddBlog from './AddBlog.vue';
import ShowBlogs from './ShowBlogs.vue';
import ListBlogs from './ListBlogs.vue';

export default {
  components: {
    'top-nav-bar': TopNavBar,
    'add-blog': AddBlog,
    'show-blogs': ShowBlogs,
    'list-blogs': ListBlogs,
  },
  data () {
    return {
      component: 'show-blogs',
    }
  },
  methods: {
    updatePage: function (updatedPage) {
      this.component = updatedPage;
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
