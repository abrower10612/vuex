<template>
  <button @click="decrement">Decrement</button><br><br>
</template>

<script>

export default {
    name: "DecrementComponent",
    methods: {
      decrement() {
        this.$store.commit('decrement');
        console.log(this.$store.state.count);
      }
    }
}
</script>

<style>

</style>