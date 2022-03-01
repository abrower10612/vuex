<template>
    <div @click="getSent" class="get-sent-email-btn">Show Sent Emails</div>
    <div class="container">
        <div :key="sent.id" v-for="sent in this.sentEmails" class="sent-email">
            <div class="header">
                <div>
                    <label for="recipient"><b>To:</b></label>
                    <div class="recipient">{{ sent.recipient }}</div>
                </div>
                <div>
                    <label for="recipient"><b>Sent:</b></label>
                    <div class="recipient">{{ sent.sent }}</div>
                </div>
            </div>
            <label for="message"><b>Message:</b></label>
            <span>{{ sent.body }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "GetSent",
    methods: {
        getSent() {
            this.sentEmails = JSON.parse(JSON.stringify(this.$store.getters.sentEmails))
            console.log(JSON.parse(JSON.stringify(this.$store.getters.sentEmails)));
        }
    },
    data() {
        return {
            sentEmails: []
        }
    }
}
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        padding-right: 10px;
        margin-bottom: 10px;
    }

    .get-sent-email-btn {
        font-size: 1.2rem;
        background: lightseagreen;
        color: aliceblue;
        width: fit-content;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
    }

    .get-sent-email-btn:active {
        background: #2ae9e0;
    }

    .sent-email {
        border: solid 2px gray;
        margin: 10px;
        padding: 10px;
        height: fit-content;
    }

    .recipient {
        margin-bottom: 10px;
    }
    
    label {
        display: block;
    }

    span {
        margin-top: 30px;
    }
</style>