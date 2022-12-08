import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSimpleAlert from "vue-simple-alert";

createApp(App).use(store).use(router).mount('#app').use(VueSimpleAlert);
