import Vue from 'vue'
import App from './App.vue'
import DascomUI from 'dascom-ui'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(DascomUI)
Vue.use(VueCompositionAPI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
