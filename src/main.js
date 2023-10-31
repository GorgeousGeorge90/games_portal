import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { store } from '@/store/store';
import { router } from '@/routes/routes';
import PrimeVue from "primevue/config";
import  ProgressBar  from 'primevue/progressbar';

createApp(App)
    .use(store)
    .use(router)
    .use(PrimeVue)
    .component('ProgressBar', ProgressBar)
    .mount('#app')

