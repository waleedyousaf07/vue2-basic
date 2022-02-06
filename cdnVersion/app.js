// Vue instance. An app can have one or more instances
new Vue({
  // any kind of interactivity, event handling or data binding is going to be controlled by this element/instance
  el: '#vue-app',
  // all the data for this instance
  data: {
    name: 'Waleed',
    job: 'Programmer',
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
