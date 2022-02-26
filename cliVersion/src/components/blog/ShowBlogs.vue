<template>
  <div id="show-blogs" v-theme:column="'narrow'"> <!-- We need to pass string as we can pass objects etc aswell. After `:`, the thing is args  -->
    <h1>All Blogs</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div class="single-blog" v-for="blog in filteredBlogs" :key="blog.id">
      <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2> <!-- our custom directive we created globally - this will give the element a random color -->
      <article>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      blogs: [],
      search: '',
    };
  },
  methods: {
    
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    },
  },
  filters: {
    'snippet': function(value) {
      return value.slice(0, 100) + '...';
    },

    // 'to-uppercase': function(value) {
    //   return value.toUpperCase();
    // },
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
  directives: {
    'rainbow': {
      bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString().slice(2, 8);
      },
    },
  },
  created() {
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then((data) => {
      this.blogs = data.body.splice(0, 10);
    });
  }
}
</script>

<style>

#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}

</style>
