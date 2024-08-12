import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-free/css/all.min.css'

const app = createApp(App).use(router)

library.add(fas)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
