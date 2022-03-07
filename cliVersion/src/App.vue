<template>
  <div>
    <!-- <h1>Vue App</h1> -->
    <!-- <app-superheroes-root :title="title" @changeTitle="updateTitle($event)"></app-superheroes-root> -->
    <!-- <app-form-helper-root :title="title" @changeTitle="updateTitle($event)"></app-form-helper-root> -->
    <!-- <app-dynamic-component-root :title="title" @changeTitle="updateTitle($event)"></app-dynamic-component-root> -->
    <!-- <app-blog-root></app-blog-root>-->
    <app-vuex-app-root></app-vuex-app-root>
  </div>
</template>

<script>
import SuperheroesRoot from './components/superheroes/SuperheroesRoot.vue';
import FormHelperRoot from './components/formHelper/FormHelperRoot.vue';
import DynamicComponentsRoot from './components/dynamicComponents/DynamicComponentsRoot.vue';
import BlogRoot from './components/blog/BlogRoot.vue';
import VuexAppRoot from './components/vuexApp/VuexAppRoot.vue';

export default {
  components: {
    'app-superheroes-root': SuperheroesRoot,
    'app-form-helper-root': FormHelperRoot,
    'app-dynamic-component-root': DynamicComponentsRoot,
    'app-blog-root': BlogRoot,
    'app-vuex-app-root': VuexAppRoot,
  },
  data () {
    return {

    }
  },
}
</script>

<style>

</style>
