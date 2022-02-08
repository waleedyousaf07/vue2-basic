// Vue instance. An app can have one or more instances
new Vue({
  // any kind of interactivity, event handling or data binding is going to be controlled by this element/instance
  el: '#vue-app',
  // all the data for this instance
  data: {
    name: 'Batman',
    job: 'Super Hero',
    website: 'https://waleedyousaf07.wixsite.com/portfolio',
    websiteTag: '<a href="https://waleedyousaf07.wixsite.com/portfolio">Portfolio</a>',
  },
  methods: {
    // greet: (time) => {
    //   return `Good ${time} ${this.job}`; // not doing `this.data.name` cuz vue js already giving us all the properties upfront 
    // } // in arrow function, `this` doesnt bind to Vue instance but instead to its own lexical parent
    greet: function (time) {
      return `Good ${time} ${this.name}`; // not doing `this.data.name` cuz vue js already giving us all the properties upfront 
    }
  },
});

new Vue({
  el: '#events',
  data: {
    age: 26,
    x: 0,
    y: 0,
  },
  methods: {
    add: function (val) {
      this.age += val;
    },
    subtract: function (val) {
      this.age = this.age - val;
    },
    updateXY: function (event) { // we get this event automatically
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function () {
      alert('Link is clicked!');
    },
    logName: function () {
      console.log('You entered name');
    },
    logAge: function () {
      console.log('You entered age');
    },
  },
});

new Vue({
  el: '#two-way-data-binding',
  data: {
    name: '',
    age: '',
  },
  methods: {},
});

new Vue({
  el: '#computed-properties',
  data: {
    age: 26,
    a: 0,
    b: 0,
  },
  computed: {
    addToA: function () {
      console.log('addToA');
      return this.a + this.age;
    },
    addToB: function () {
      console.log('addToB');
      return this.b + this.age;
    },
  },
});

new Vue({
  el: '#dynamic-css',
  data: {
    available: true,
    nearby: false,
  },
  methods: {},
  computed: {
    compClasses: function () {
      return {
        available: this.available,
        nearby: this.nearby,
      }
    },
  },
});

new Vue({
  el: '#conditionals',
  data: {
    error: false,
    success: false,
  },
  methods: {},
  computed: {},
});

new Vue({
  el: '#looping-v-for',
  data: {
    superHeroes: ['Batman', 'Superman', 'Wonder Woman', 'Flash'],
    realCharacters: [
      { name: 'Bruce Wayne', age: '42' },
      { name: 'Kal El', age: '1000' },
      { name: 'Dianna', age: '2000' },
      { name: 'Barry Allen', age: '20' },
    ],
  },
  methods: {},
  computed: {},
});

var one = new Vue({
  el: '#vue-app-1',
  data: {
    title: 'Vue App 1',
  },
  methods: {},
  computed: {
    greet: function () {
      return 'Hello from app 1';
    },
  },
});

var two = new Vue({
  el: '#vue-app-2',
  data: {
    title: 'Vue App 2',
  },
  methods: {
    changeTitle: function () {
      one.title = 'Title changed by App 2';
    },
  },
  computed: {
    greet: function () {
      return 'This is app 2';
    },
  },
});

two.title = 'Title changed from outside';
