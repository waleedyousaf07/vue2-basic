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

### Events

We can use the events with `v-on:` directive. Alternatively, `@` is `short-hand` for `v-on:`
We can use alot of DOM events like click, dblclick, mousemove etc. Inside these events, we have access to properties of Vue data.

    <button v-on:click="age++">Add an Year</button>
    <button @click="age--">Subtract an Year</button>

Alternatively, we can externalize this code and fire some method. No need to call the methods if we dont need to pass any params, Vue will know. But if method is expecting some params, then we need to call them with those. We can use same methods by sometimes passing values for slightly different purposes

    // ---- .js ----

    new Vue({
      el: '#events',
      data: {
        age: 26,
      },
      methods: {
        add: function (val) {
          this.age += val;
        },
        subtract: function (val) {
          this.age = this.age - val;
        },
      },
    });

    // ---- .html ----

    <button v-on:click="add(1)">Add an Year</button>
    <button v-on:click="subtract(1)">Subtract an Year</button>

    <button v-on:dblclick="add(10)">Add 10 Years</button>
    <button v-on:dblclick="subtract(10)">Subtract 10 Years</button>

We can specify if an event needs to be only run once by using `event modifiers`. Event modifiers are also used for other purposes like for preventing the default behaviour of an anchor tag etc.

    <button v-on:click.once="add(10)">Add an Year Only once</button> // event wont run after first click

    <a @click.prevent="click" href="https://waleedyousaf07.wixsite.com/portfolio">Waleed Yousaf</a> // clicking will only call the method `click` and wont redirect to the `href` of anchor tag which is the default behaviour

For DOM events, on trigger, we get access to the `event` property which we can use

    // ---- .js ----
    new Vue({
      el: '#events',
      data: {
        x: 0,
        y: 0,
      },
      methods: {
        updateXY: function (event) { // we get this `event` automatically
          this.x = event.offsetX;
          this.y = event.offsetY;
        },
      },
    });

    // ---- .html ----
    
    <div id="events" v-on:mousemove="updateXY">{{ x }}, {{ y }}</div>

The mouse event modifiers are: 
- stop
- prevent
- capture
- self
- once

We can also use the keyboard events like onkeyup, onkeydown etc.

We can use modifiers to control events like the `.enter` modifier on `keyup` event will only run the method of we press enter key.

We can also chain these modifiers and then they'll work if both of those buttons are typed together

    // ---- .js ----
    new Vue({
      el: '#events',
      data: {},
      methods: {
        logName: function () {
          console.log('You entered name');
        },
        logAge: function () {
          console.log('You entered age');
        },
      },
    });

    // ---- .html ----

    <label>Name:</label>
    <input type="text" @keyup="logName" />
    <label>Age:</label>
    <input type="text" @keyup.enter="logAge" />
    <label>Skill:</label>
    <input type="text" @keyup.alt.enter="logAge" />

The keyboard modifiers are:
- enter
- tab
- delete
- esc
- space
- right
- left
- up
- down
- alt

### Two-way data binding

Instead of listening to an event on an element and then echo or store that latest value to another property by setting it manually, we can use two-way data binding by using the `v-model`

    // ---- .js ----
    new Vue({
      el: '#two-way-data-binding',
      data: {
        name: '',
        age: '',
      },
      methods: {},
    });

    // ---- .html ----
    <div id="two-way-data-binding">
    <h1>Two way data-binding</h1>
  
    <label>Name:</label>
    <input type="text" v-model="name" />
    <span>{{ name }}</span>
    <label>Age:</label>
    <input type="text" v-model="age" />
    <span>{{ age }}</span>
  </div>
