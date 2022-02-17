<template>
  <div>
    <app-form-helper>
      <div slot="form-header">
        <h3>Title of Form</h3>
        <p>Info about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="Name" required />
        <input type="password" placeholder="Password" required />
      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">Submit</button>
      </div>
    </app-form-helper>
  </div>
</template>

<script>
import FormHelper from './FormHelper.vue';

export default {
  components: {
    'app-form-helper': FormHelper,
  },
  data () {
    return {
      title: 'Im a dynamic slot tile'
    }
  },
}
</script>

<style>

</style>
