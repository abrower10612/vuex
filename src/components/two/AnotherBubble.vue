<template>
  <div>{{this.$store.state.count}}</div>
</template>

<script>
export default {
    name: "AnotherBubble"
}
</script>

<style scoped>
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      background: lightseagreen;
      color: #FFFFFF;
      border-radius: 50%;
      font-size: 1rem;
      width: 30px;
      height: 30px;
      margin: 5px;
    }
</style>