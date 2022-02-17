## Introduction:

A repo covering the core concepts of VueJS (2).
<br/><br/>

## Installation

### CDN

CDN is the simplest way for smaller single page applications. We just need to Add the link from [official website](https://vuejs.org/v2/guide/) in a script in our `index.html`  like

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

### Vue CLI

We can setup by CLI in order to create a dev env workflow with webpack. Through this, we'd be able to:

- Use ES6 features like imports
- Compile and minify JS into one file which significantly improves loading speeds
- We can use single file template
- Compile everything on our machine instead of a browser
- Live reload dev server

We need to install node js as we'll be using npm

After that, we can install vue (can install globally)

    npm install -g vue-cli

After installation, we can initialize our project by using some templates. They'll provide us simple, webpack, linited, testing integrated and their combination's templates. We can use as per our requirements by `vue init <template-name> <project-name>`

    vue init webpack-simple my-vue-cli-basic

After this, go to the directory where project is initilized like `cd <project-name>` and then run

    npm install
  
to install all the npm packages and then run 

    npm run dev

which will start the app in a dev server

## Core

A `framework` used to create `JS driven apps` for the `web`. As its based on JS, pages run into the browser. This makes it somewhat similar to React and Angular.

What makes it different from them is:

- It only takes up `16kb on production version` so its lightweight/lean and `loads quickly`
- It has a very `high run-time performance`
- Although being lean and performant, it maintains a lot of features like `components, filters, forms, data bindings, etc`
- Separation of HTML, CSS and JS in one file with `separate sections` allowing to get HTML from designers
- `Native Script` is available for mobile application development

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

### Computed Properties

If we use methods, which return output, in DOM, each time any value is changed, both/all of these methods will run even only on clicking one button updates value of one. To make it more efficient, we'll use `computed properties`, which are almost same as methods but will only run the required method. 

For computed properties, we dont need to call methods

    // ---- .js ----
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

    // ---- .html ----
    <div id="computed-properties">
      <h1>Computed Properties</h1>
    
      <button v-on:click="a++">Add to A</button>
      <button @click="b++">Add to B</button>
    
      <p>A - {{ a }}</p>
      <p>B - {{ b }}</p>
      <p>Age + A => {{ addToA }}</p>
      <p>Age + B => {{ addToB }}</p>
    </div>

### Dynamic CSS

We can add classes dynamically to HTML elements by binding the class property through `v-bind` and then passing an object of classes with the boolean values which determine if they are appllied or not.

    // ---- .js ----
    new Vue({
      el: '#dynamic-css',
      data: {
        available: true,
      },
    });

    // ---- .html ----
    <div id="dynamic-css">    
      <div v-on:click="available = !available" v-bind:class="{available: available}">
        <span>Ronaldo</span>
      </div>
    </div>

Also, instead of having that object for class here, we can pass it from the Vue instance

    // ---- .js ----
    new Vue({
      el: '#dynamic-css',
      data: {
        available: true,
        nearby: false,
      },
      computed: {
        compClasses: function () {
          return {
            available: this.available,
            nearby: this.nearby,
          }
        },
      },
    });

    // ---- .html ----
    <button v-on:click="nearby = !nearby">Toggle nearby</button>
    <button v-on:click="available = !available">Toggle available</button>
    <div v-bind:class="compClasses">
      <span>Ronaldo</span>
    </div>

### Conditional

The directives `v-if`/`v-else-if` and `v-show` are used to conditionally show elements.

For `v-if`, if false, the element will get removed completely from the DOM.

`v-show` is another directive like if but as `v-if` completely removes the element from DOM, `v-show` only adds a style `display: none` and it remains in the DOM but is not visible

    // ---- .js ----
    new Vue({
      el: '#conditionals',
      data: {
        error: false,
        success: false,
      },
    });

    // ---- .html ----
    <div id="conditionals">
      <h1>Conditionals</h1>
      <button v-on:click="error = !error">Toggle Error</button>
      <button v-on:click="success = !success">Toggle Success</button>
    
      <p v-if="error">There is some error</p> 
      <p v-else-if="success">Successfully completed</p>
    
      // Note: Use on of the `p` tag pairs as they are pointing and manipulating the same Vue instance data properties
      <p v-show="error">There is some error</p>
      <p v-show="success">Successfully completed</p>
    </div>

### Looping with v-for

We can loop through arrays and objects with a directive called `v-for`. We can use `template` instead of an element like `div` to avoid adding an extra element/div to the DOM while looping.

    // ---- .js ----
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
    });

    // ---- .html ----
    <div id="looping-v-for">
      <h1>Looping v-for</h1>
      <ul>
        <li v-for="superHero in superHeroes">{{ superHero }}</li>
      </ul>
    
      <template v-for="(realCharacter, index) in realCharacters">
        {{ index + 1 }}. {{ realCharacter.name }} - {{ realCharacter.age }}
      </template>
      <!-- By template, an extra div/element wont get added to the DOM -->
    
      <template v-for="realCharacter in realCharacters">
        <div v-for="(val, key) in realCharacter">
          <p>{{ key }} - {{ val }}</p>
        </div>
      </template>
    </div>

### Multiple Instances

We can have multiple view instances to separate out the logic (for examples separate instance for each widget etc.).

We can store the instances in variables in order to access and update their properties from the outside or other instances.

Although, if the instances needs to communicate frequently, then we should reconsider our approaches as its better to keep them in the same instance

    // ---- .js ----
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


    // ---- .html ----
    <div id="vue-app-1">
      <h2>{{ title }}</h2>
      <p>{{ greet }}</p>
    </div>
  
    <div id="vue-app-2">
      <h2>{{ title }}</h2>
      <p>{{ greet }}</p>
      <button @click="changeTitle">Change App 1 title</button>
    </div>

### Components


We can create reusable components in Vue by using `Vue.component` function which accepts 2 arguments. The first would be the name of the component and second would be an object which will have the keys, `template` which holds the element, with properties, to return, a `data` key which is a function, returning an object with data properties, unlike Vue instance because it will create new copies of data and if we'd use the object, then as its gonna be reused in multiple places, that'd be pointing/referencing to the same object. Another key `methods` would be similar to that of Vue instance.

All these methods and data properties can be accessed, as in html, in the template of the component.

The component is called with its name in the component brackets.

    // ---- .js ----
    Vue.component('greeting', {
      template: '<p>Heyy there, Im a {{ name }}. <button @click="changeName">Change Name</button></p>',
      data: function () {
        return {
          name: 'Batman',
        }
      },
      // data() {
      //   return {
      //     name: 'Batman',
      //   }
      // },
      // ^^ both are same

      methods: {
        changeName: function () {
          this.name = 'Bruce';
        },
      }
    });

    // ---- .html ----
    <div id="vue-app-one">
      <h2>{{ title }}</h2>
      <greeting></greeting>
    </div>

    <div id="vue-app-two">
      <h2>{{ title }}</h2>
      <greeting></greeting>
    </div>

### Refs

Vue lets us reach into html templates and grab elements and access data about that element through refs. We then can get the attributes of that element like `innerText, innerHTML, value` etc and use that in our Vue instance

In order to give an element a reference, we just use the keyword `ref` in that element and give it any name. Then in our Vue instance, we can access it by `this.$refs` which will give us an object with all the refs on the page, the key will be the ref's name, and value would be the element and alot of properties on that

    // ---- .js ----
    new Vue({
      el: '#refs',
      data: {
        output: 'Your fav food',
      },
      methods: {
        readRefs: function () {
          console.log(this.$refs);
          console.log(this.$refs.test.innerText);
          this.output = this.$refs.inputRef.value;
        },
      },
      computed: {},
    });

    // ---- .html ----
    <input type="text" ref="inputRef" />
    <button @click="readRefs">Submit</button>
    <p>Your fav food: {{ output }}</p>
    <div ref="test">Test Div</div>

### .vue

The component can be created in a separate file, with the extension `.vue` where we'll have a `template` tag which will have all the HTML. The template can only have one child e.g. `div` and that can then have multiple subsequent children

It'll have a `script` as we arent in a .js file and that script will return an object somewhat similar to that of `Vue.component`. 

That object will have a `name` property which will have the name of the template and the `data` method whose values we can use in the `template` above. 

This file can also have the `styles` for the `template` above.

We can call this `.vue` file in our `Vue Instance` in our `.js` file which will render all this in our `.html`'s element whose `id/class` Vue instance has as its `el` attribute.

    // ---- .html ----

    <div id="app"></div>

    // ---- .js ----

    import Vue from 'vue'
    import App from './App.vue'

    new Vue({
      el: '#app',
      render: h => h(App)
    })

    // ---- .vue ----

    <template>
      <div id="app">
        <img src="./assets/logo.png">
        <h1>{{ title }}</h1>
        <p>{{ greeting() }}</p>
        <h2>Essential Links</h2>
        <ul>
          <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        </ul>
      </div>
    </template>

    <script>
    export default {
      name: 'app',
      data () {
        return {
          title: 'Welcome to Your Vue.js App'
        }
      },
      methods: {
        greeting: function () {
          return 'Heyy you';
        },
      }
    }
    </script>

    <style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    a {
      color: #42b983;
    }
    </style>

### Nesting Components

We can create multiple components to modularize our code. We can nest one component in another by either register the component which is to be used in the parent as global or local.

The globally registered one can be used in other components too, apart from the onw where its registered and vice versa for the local.

    // ---- ReusableComponent.vue ----

    <template>
      <ul>
        <li v-for="superhero in superheroes" :key="superhero">{{ superhero }}</li>
      </ul>
    </template>

    <script>
    export default {
      data () {
        return {
          superheroes: ['Batman', 'Wonder Woman', 'Superman'],
        }
      },
    }
    </script>

For global, we can go the main.js and import that .vue component and then create that over here by using `Vue.component` and assigning it a name and passing this component `.vue`. After that, go the component where it needs to be used and just call it as a component in a tag with the name we gave in main.js and it will work

    // ---- main.js ----

    import Vue from 'vue'
    import App from './App.vue'
    import ReusableComponent from './ReusableComponent.vue'

    Vue.component('superheroes', ReusableComponent);

    new Vue({
      el: '#app',
      render: h => h(App)
    })

    // ---- App.vue ----

    <template>
      <div>
        <h1>{{ title }}</h1>
        <superheroes></superheroes>
      </div>
    </template>

    <script>
    export default {
      data () {
        return {
          title: 'Super App',
        }
      },
    }
    </script>

For the local registeration, we'd import the resuable component in the script of the one where we need it. Then, we'd define/register inside that exported object inside a key `components` which would be an object where the key will be the name of the component and the value would be the imported component itself

    // ---- App.vue ----

    <template>
      <div>
        <h1>{{ title }}</h1>
        <superheroes></superheroes>
      </div>
    </template>

    <script>
    import Superheroes from './Superheroes.vue'

    export default {
      components: {
        'superheroes': Superheroes,
      },
      data () {
        return {
          title: 'Super App',
        }
      },
    }
    </script>

### Scoped CSS

If we add some styles in the `style` section of `.vue`, they'll get applied to the components called in them also. Also, if the called component have any styles with same selectors, they'll override the caller's.

Therefore, we can use `scoped` in the style element which gives each component a unique identifier so that the styles are only applied to the elements of that component

    <style scoped>
      h1 {
        color: purple;
      }
    </style>

### Props

As in other frameworks, we can pass props to the components. While passing the prop in the element of the called component, we need to bind the prop so that its actual value can be passed instead of the string. The passed props can be received in the called component in the script in that object in a key `props`. 

The value can either be a simple array of received props or it can be an object with the `key` as `prop name` and its value an object which can have multiple keys like `type` and `required` which are used for type checking and whether its a required prop or not.

We can use these props in template and access this prop in our methods as we do with local data properties

    // ---- Caller.vue ----

    <template>
      <div>
        <app-superheroes :superheroes="superheroes"></app-superheroes> 
      </div>
    </template>

    <script>
    import Superheroes from './components/Superheroes.vue';    import Footer from './components/Footer.vue';

    export default {
      components: {
        'app-superheroes': Superheroes,
      },
      data () {
        return {
          superheroes: [
            { title: 'Batman', name: 'Bruce', show: false },
            { title: 'Wonder Woman', name: 'Dianna', show: false },
          ],
        }
      },
    }
    </script>

    // ---- Callee.vue ---- (Superheroes.vue)

    <template>
      <div id="superheroes">
        <ul>
          <li v-for="superhero in superheroes" :key="superhero.title" @click="superhero.show = !superhero.show">
            <h2>{{ superhero.title }}</h2>
            <h3 v-show="superhero.show">{{ superhero.name }}</h3>
          </li>
        </ul>
      </div>
    </template>

    <script>
    export default {
      // props: ['superheroes'],
      
      // To validate the prop we can do instead
      props: {
        superheroes: {
          type: Array,
          required: true,
        }
      },
      data () {
        return {}
      },
      methods: {
        test: function () {
          console.log('aaaa', this.superheroes);
        }
      }
    }
    </script>

### Primitive vs Referenced Types in context to Vue props

Passing a reference type to another component is like passing its reference. Updating inside the callee will update the orginal data.

Unlike the referenced, primitive will update a new copy instead of the original data.

### Events (child to parent)

One use of the events can be to update data in the parent. As the primitive types dont get updated in the child when passed as the props, one way can be to tie them up with an event and trigger/emit it from child and the parent will keep on listening from where the component is called like other events like `click` etc. Then when that element is triggered/emitted, parent can take any action like updating where the updated data is passed.

While emitting from the child, we can use `this.$emit` function where the first param is the name of the event like the js click event and the second parameter can be the data we need to pass to the parent.

    // ---- <child>.vue ----
    ...
    methods: {
      changeTitle: function () {
        // this.title = 'Superheroes MCU'; 
        this.$emit('changeTitle', 'Superheroes MCU');
      }
    },
    ...

    // ---- <parent>.vue ----
    <template>
      <div>
        <app-header :title="title" @changeTitle="updateTitle($event)"></app-header>
      </div>
    </template>

    ...
    methods: {
      updateTitle: function (updatedTitle) {
        this.title = updatedTitle;
      }
    },
    ...

### Event Bus

Previously for updating the data, we used events which updated the parent and then subsequently re rendering all the children with the fresh copies. What if we dont wanna go this route, cuz we are updating the main data and also there is back and forth to parent which isnt required.

We can use `event bus` which is a simple vue instance which we can create in main.js and then import in all the components where its needed to emit or listen.

For the component which will emit the event, we can do similar stuff for emitting but not using the emit of `this` but `bus` as we are emitting on the bus. Also if we are updating something, we have to do it along emitting as that will only change/fire where its being listened and not this component

    // ---- <Emitter>.vue ----

    ...
    this.title = 'Superheroes MCU';
    bus.$emit('titleChanged', 'Superheroes MCU');
    ...

    // ---- <Receptor>.vue ----

    ...
    data () {},
    created() { // lifecycle hook
      bus.$on('titleChanged', (data) => {
        this.title = data;
      });
    },
    ...

### Lifecycle Hooks

When we create a new vuew instance or component, it goes through specific kind of lifecycle. Along this lifecycle, we have access to certian function or methods that fires at certain points. These are lifecycle hooks.

- beforeCreate: When we create a Vue instance, the first lifecycle `beforeCreate` is called before creation. 

After this instance observes any data so before this we dont have access to any `data` property on the instance. 

After that, the events are initialized.

- created: And after those, another lifecycle hook triggers i.e. `created` which fires when the component has been created so any code we need to execute after the component's creation, we can add it here. We have access to all the `data` etc. This generally is a good point to reach out for data if needed like from the DB. `mounted` is also used for same purpose but better to use this

After that, it checks for `el` option if present, if yes, it checks if it has `template` option and if no `el` option it waits for `vm.$mounted(el)` is called and then checks for template.

After that, if it has a `template`, it compiles template into `render` function and if not it compiles `el`;s outer HTML as `template`.

After compilation, when its about to mount the DOM

- beforeMount: so if we need to do anything just before mounting, we can use this but its rarely used.

After this, the `vm.Sel` is created and its replaced with `el`.

- mounted: When it has mounted, we get this lifecycle hook. At this point, we have access to the things in DOM cuz its mounted. So we can reach and manipulate anything in DOM.

After this, we can do a couple of things like we can either update the component or instance by changing the data in it we change the state

- beforeUpdate: When the data is changed and before update, we get this lifecycle hook `beforeUpdate`

- updated: After the update is complete, we get another lifecycle method `updated` where we get/access the updated DOM

Apart from the update, the other thing that can happen after `mounted` is that the component can be destroyed.

- beforeDestroy: So here we can execute any code which we wanna before destroying the component.

Then, it tears down any kind of components, events, listeners, watchers child components or like anything associated with that component/instance

- destroyed: Once its destroyed, we get access to this where we can have cleanups

    ...
    data () {return {}},
    methods: {},
    beforeCreate() {
      alert('before create');
      console.log('lch - before create');
    },
    ...

### Slots

We can define the logical components here, they'll output in the component where passed as they are layed out and styled. So the logic is separate out. Also we can reuse the same styled and structured component to render different forms. For passing an HTML template as props to the component, we can pass using bind but we can use slots. There are two ways, one as passing as HTML inside the component and then using that in the called component.

Even though the slot will actually get called in the `called` component, still it would read the dynamic properties of the component where its defined

    // ---- <caller>.vue ---
 
    <template>
      <div>
        <app-form-helper>
          <h2 slot="title">{{ title }}</h2> // title will ready `caller`'s data properties
          <p slot="text">I am the paragraph text for the slot</p>
        <app-form-helper>
      </div>
    </template>

    // ---- <called>.vue ---
    
    <template>
      <div>
        <slot name="title"></slot>
        <h1>Form Helper</h1>
        <slot name="text"></slot>
      </div>
    </template>
