import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router';
import './style.css'
import App from './App.vue'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import axiosInstance from './axios';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(router).use(pinia)

app.config.globalProperties.$url = axiosInstance;

app.mount('#app');

