<template>
    <div>{{this.$store.state.count}}</div>
</template>

<script>
export default {
    name: "CountBubble"
}
</script>

<style scoped>
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        background: red;
        color: #FFFFFF;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        margin: 30px;
    }
</style>