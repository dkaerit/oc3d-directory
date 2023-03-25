import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const app = createApp(App);

if (process.env.NODE_ENV === 'production') {
  app.config.warnHandler = () => {};
}

app.use(router);
app.use(store);
app.mount('#app');
