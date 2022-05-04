import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import Instagram from './components/Instagram.vue'

createApp(App).mount('#app')
createApp(Instagram).mount('#instagram')

