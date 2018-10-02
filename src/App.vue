<template>
  <div id="app">
    <input-component></input-component>
  </div>
</template>

<script>
import InputComponent from './components/InputComponent.vue';
export default {
  components: {
    InputComponent
  },
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<style>
</style>
