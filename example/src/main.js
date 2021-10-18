import Vue from 'vue'
// plugins
import '@/plugins/tailwind'
import '@/plugins/composition-api'
import '@/plugins/pdfjs'
import '@/plugins/videojs'
import '@/plugins/element-ui'
import '@/plugins/dascom-ui'

import '@/styles/index.css'

import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
