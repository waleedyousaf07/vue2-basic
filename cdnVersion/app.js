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
    greet: (time) => {
      return `Good ${time} ${this.job}`; // not doing `this.data.name` cuz vue js already giving us all the properties upfront 
    }
  },
});
