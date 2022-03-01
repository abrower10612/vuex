<template>
<div>
  <h1>Sent</h1>
  <AnotherBubble />
</div>
</template>

<script>
import AnotherBubble from './AnotherBubble.vue';

export default {
    name: "ThreeComp",
    components: {
        AnotherBubble
    }
}
</script>

<style scoped>
  div {
    display: flex;
  align-items: center;
  }
</style>