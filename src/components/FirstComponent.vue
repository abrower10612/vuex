<template>
  <SecondComponent />
</template>

<script>
import SecondComponent from './SecondComponent.vue';

export default {
    name: "TestComponent",
    components: {
        SecondComponent
    },
    methods: {
        increment() {
            this.$store.commit('increment');
            console.log(this.$store.state.count)
        }
    }
}
</script>