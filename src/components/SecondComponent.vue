<template>
  <ThirdComponent />
</template>

<script>
import ThirdComponent from './ThirdComponent.vue'

export default {
    name: 'SecondComponent',
    components: {
        ThirdComponent
    },
    methods: {
        increment() {
            this.$store.commit('increment');
            console.log(this.$store.state.count);
        }
    }
}
</script>