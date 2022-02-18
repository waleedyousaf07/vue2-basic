<template>
  <div id="show-blogs" v-theme:column="'narrow'"> <!-- We need to pass string as we can pass objects etc aswell. After `:`, the thing is args  -->
    <h1>All Blogs</h1>
    <div class="single-blog" v-for="blog in blogs" :key="blog.id">
      <h2 v-rainbow>{{ blog.title }}</h2> <!-- our custom directive we created globally - this will give the element a random color -->
      <article>{{ blog.body }}</article>
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
    };
  },
  methods: {
    
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
