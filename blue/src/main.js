
import '@mdi/font/css/materialdesignicons.css'
import router from './router'
import { createApp } from 'vue'
import scrollReveal from './directives/scrollReveal'
import App from './App.vue'

import { vuetify }  from './plugins/vuetify.js'

createApp(App)
  .use(vuetify)
  .use(router)
  .directive('scroll-reveal', scrollReveal)
  .mount('#app')
