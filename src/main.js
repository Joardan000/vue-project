import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import "vue-toastification/dist/index.css";
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

import Toast from "vue-toastification";
import {createPinia} from "pinia";
const pinia = createPinia()

const app = createApp(App)
const options = {
    position: "top-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
}
app.use(Toast,options)
app.use(pinia)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});
app.use(router)
app.mount('#app')
