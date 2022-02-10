Vue.component('greeting', { // Name of the component
  template: '<p>Heyy there, Im a {{ name }}. <button @click="changeName">Change Name</button></p>',
  data: function () { // data property is not directly an object unlike Vue instance. Its a function because multiple Vue instances are gonna use this component so they would point/reference to same object, by using function, a fresh copy is made for the data
    return {
      name: 'Batman',
    }
  },
  methods: {
    changeName: function () { // will call this in the above template's button
      this.name = 'Bruce';
    },
  }
});

new Vue({
  el: '#vue-app-one',
  data: {
    title: 'Vue App One',
  },
  methods: {},
  computed: {},
});

new Vue({
  el: '#vue-app-two',
  data: {
    title: 'Vue App Two',
  },
  methods: {},
  computed: {},
});

new Vue({
  el: '#refs',
  data: {
    output: 'Your fav food',
  },
  methods: {
    readRefs: function () {
      console.log(this.$refs); // this.$refs will give us an object with all the refs on the page, the key will be the ref's name, and value would be the element and alot of properties on that
      console.log(this.$refs.test.innerText);
      this.output = this.$refs.inputRef.value;
    },
  },
  computed: {},
});
