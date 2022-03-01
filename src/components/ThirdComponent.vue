<template>
    <label for="recipient">To:</label><br>
    <input type="text" v-model="recipient"><br><br>
    <label for="message">Message:</label><br>
    <textarea type="text" v-model="messageBody"></textarea><br><br>
    <div class="send-email-btn" @click="send">Send Email</div>
    <hr>
    <ThreeComp />
    <GetSent />
</template>

<script>
import GetSent from './GetSent.vue';
import ThreeComp from './two/ThreeComp.vue';

export default {
    name: 'ThirdComponent',
    components: {
        GetSent,
        ThreeComp
    },
    methods: {
        send() {
            if (!this.recipient) return alert('Please provide a recipient');
            if (!this.messageBody) return alert('Please provide a message');

            this.$store.commit('addSent', {
                recipient: this.recipient,
                body: this.messageBody,
                sent: new Date().toString()
            });
            this.$store.commit('increment');
            this.messageBody = '';
            this.recipient = '';
        }
    },
    data () {
        return {
            messageBody: '',
            recipient: ''
        }
    }
}
</script>

<style scoped>
    .send-email-btn {
        font-size: 1.2rem;
        background: lightseagreen;
        color: aliceblue;
        cursor: pointer;
        width: fit-content;
        padding: 10px;
        border-radius: 5px;
    }

    .send-email-btn:active {
        background: #2ae9e0;
    }
</style>