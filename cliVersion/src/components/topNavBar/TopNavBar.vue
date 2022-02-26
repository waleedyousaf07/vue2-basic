<template>
  <div>
    <div class="topnav">
      <a :class="{active: component === 'show-blogs'}" href="#" @click="changeTitle('show-blogs')">Home</a>
      <a :class="{active: component === 'add-blog'}" href="#" @click="changeTitle('add-blog')">Add Blog</a>
      <a :class="{active: component === 'list-blogs'}" href="#" @click="changeTitle('list-blogs')">List Blog Titles</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['component'],
  data () {
    return {

    }
  },
  methods: {
    changeTitle: function (val) {
      this.$emit('changePage', val);
    }
  },
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}
</style>
