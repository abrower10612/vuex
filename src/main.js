import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            count: 0,
            sent: []
        }
    },
    getters: {
        sentEmails (state) {
            return state.sent;
        }
    },
    mutations: {
        increment (state) {
            state.count++
        },
        decrement (state) {
            state.count--
        },
        reset (state) {
            state.count = 0;
        },
        addSent (state, email) {
            state.sent = [...state.sent, email]
        }
    }
})

createApp(App).use(store).mount('#app');