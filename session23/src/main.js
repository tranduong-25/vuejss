import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const app = createApp(App);
2   
app.use(store)

app.mount('#app')
