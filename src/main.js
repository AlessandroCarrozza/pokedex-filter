import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa il file CSS di Bootstrap
import { router } from "./router.js";

createApp(App).use(router).mount('#app')
