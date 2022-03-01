<template>
  <div id="app">
    <FirstComponent />
  </div>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue';

export default {
  name: 'App',
  components: {
    FirstComponent
  },
  methods: {
    increment() {
      this.$store.commit('increment');
      console.log(this.$store.state.count)
    }
  }
}
</script>

<style>
  * {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
