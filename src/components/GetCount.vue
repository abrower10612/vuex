<template>
  <button @click="getCount">Get Count</button>
</template>

<script>
export default {
    name: 'GetCount',
    methods: {
        getCount() {
            console.log(this.$store.state.count);
        }
    }
}
</script>