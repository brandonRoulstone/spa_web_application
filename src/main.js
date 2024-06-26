import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// vue toast notification
import "vue3-toastify/dist/index.css";

createApp(App).use(store).use(router).mount('#app')
