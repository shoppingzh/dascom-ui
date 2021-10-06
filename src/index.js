import Vue from 'vue'
import DsEmpty from '../packages/DsEmpty'
import './theme/index.scss'

const components = [
  DsEmpty
]

function install(Vue) {
  components.forEach(component => {
    Vue.use(component)
  })
}

export default {
  install
}
