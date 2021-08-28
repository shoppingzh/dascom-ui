import Vue from 'vue'
import App from './App.vue'
import DascomUI from 'dascom-ui'

Vue.use(DascomUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
