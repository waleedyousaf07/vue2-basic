<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form Two - Log In</h3>
        <p>Enter your details to log-in</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="username" required />
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">Login</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import FormHelper from '../formHelper/FormHelper.vue';

export default {
  components: {
    'form-helper': FormHelper,
  },
  data () {
    return {

    }
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
}

form {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}

#useful-links ul {
  padding: 0;
}

#useful-links li {
  display: inline-block;
  margin-right: 10px;
}

form > div {
  padding: 20px;
  background: #eee;
  margin: 20px 0;
}

#form-header {
  background: #ddd;
  border: 1px solid #bbb;
}

</style>
