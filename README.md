## Introduction:

A repo covering the core concepts of VueJS (2).
<br/><br/>

## Installation

### CDN

CDN is the simplest way for smaller single page applications. We just need to Add the link from [official website](https://vuejs.org/v2/guide/) in a script in our `index.html`  like

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

## Core

A `framework` used to create `JS driven apps` for the `web`. As its based on JS, pages run into the browser. This makes it somewhat similar to React and Angular.

What makes it different from them is:

- It only takes up `16kb on production version` so its lightweight/lean and `loads quickly`
- It has a very `high run-time performance`
- Although being lean and performant, it maintains a lot of features like `components, filters, forms, data bindings, etc`

### Vue Instance

An app can have one or more instances. Each instance has a property `el` through which any kind of interactivity, event handling or data binding is going to be controlled. 

Another `data` property has all the data properties of this instance which the element in HTML with the `el` id/class etc can access.

A `methods` property can be used to store methods which can be called in the HTML. A method can use `this` to access the `data` properties of the Vue instance but important to note is that in `arrow function`, `this` `doesnt bind` to Vue instance but instead to its own lexical parent therefore normal functions needs to be used. Also, we dont have to access the `data` property from this as Vue does it by itself and we can directly access the properties of data against `this` by doing like, `this.name` instead of `this.data.name`.

    new Vue({
      el: '#vue-app',
      data: {
        name: 'Waleed',
        website: 'https://waleedyousaf07.wixsite.com/portfolio',
        websiteTag: '<a href="https://waleedyousaf07.wixsite.com/portfolio">Portfolio</a>',
      },
      methods: {
        greet: function (time) {
          return `Good ${time} ${this.name}`; 
        }
      },
    });

We can access these `data` and `methods` properties in HTML by using this declarative `{{}}` like

    <div id="vue-app">
      <h1>{{ greet('Afternoon') }}</h1>
      <p>Name: {{ name }}</p>
      <p>Job: {{ job }}</p>
    </div>

### Binding

In order to bind the element's properties to the Vue, we use `v-bind:` before the property and then pass the Vue data attribute in the quotes and Vue will pick its value. 

We can alternatively use the short hand vue binding i.e. just `:` before the property which is same as `v-bind:`

We can also store whole elements (stringified) in data properties of Vue instance and use it in the DOM but in an HTML tag by injecting it to its HTML by `v-html` attribute

    // ----.js----

    new Vue({
      el: '#vue-app',
      data: {
        website: 'https://waleedyousaf07.wixsite.com/portfolio',
        websiteTag: '<a href="https://waleedyousaf07.wixsite.com/portfolio">Portfolio</a>',
      },
    });

    // ----.html----

    <div id="vue-app">
      <a :href="website">My portfolio</a>
      <input type="text" :value="name" />
      <p v-html="websiteTag"></p>
    </div>
