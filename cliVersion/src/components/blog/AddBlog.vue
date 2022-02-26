<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required /> <!-- v-model will bind to the data property and update it with each key press. But if we dont want that, we can use an input modifier i.e. lazy which will only update them after `tab` is pressed -->
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label>Action</label>
        <input type="checkbox" value="action" v-model="blog.categories" /> <!-- When setting one value, VueJS will set that in the blog.categories array -->
        <label>RPG</label>
        <input type="checkbox" value="rpg" v-model="blog.categories" />
        <label>Sports</label>
        <input type="checkbox" value="sports" v-model="blog.categories" />
        <label>Adventure</label>
        <input type="checkbox" value="adventure" v-model="blog.categories" />
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors" :key="author">{{ author }}</option>
      </select>
      <button @click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Post added successfully</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Genre:</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">{{ category }}</li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: '',
      },
      authors: ['Batman', 'WW', 'Superman'],
      submitted: false,
    };
  },
  methods: {
    post: function () {
      // after installing `vue-resource`, now we have access to this `http`
      this.$http.post('https://vue2-basic-default-rtdb.firebaseio.com/posts.json', this.blog).then((data) => {
        this.submitted = true;
        console.log('aaa', data);
      })
    },
  }
}
</script>

<style>

#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 500px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"], textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3 {
  margin-top: 10px;
}

#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label {
  display: inline-block;
}

</style>
