import { createApp } from 'vue';
import router from './router';
import './assets/css/style.css';
import App from './App.vue';
import './utils/rem';

createApp(App).use(router).mount('#app');
