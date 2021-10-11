import Vue from 'vue'
// plugins
import '@/plugins/composition-api'
import '@/plugins/pdfjs'
import '@/plugins/dascom-ui'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
