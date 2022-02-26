<template>
  <div id="show-blogs" v-theme:column="'narrow'"> <!-- We need to pass string as we can pass objects etc aswell. After `:`, the thing is args  -->
    <h1>All Blogs</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div class="single-blog" v-for="blog in filteredBlogs" :key="blog.id">
      <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2> <!-- our custom directive we created globally - this will give the element a random color -->
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from '../../mixins/searchMixin';

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
  computed: {},
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
  mixins: [searchMixin],
  created() {
    this.$http.get('https://vue2-basic-default-rtdb.firebaseio.com/posts.json').then((data) => {
      return data.json();
    }).then((data) => {
      let blogsArray = [];
      for (let key in data) {
        blogsArray.push({ ...data[key], id: key });
      }
      this.blogs = blogsArray;
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
