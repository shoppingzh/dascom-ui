import DsHello from '../packages/DsHello/index'
import DsEmpty from '../packages/DsEmpty'

function install(Vue) {
  Vue.use(DsHello)
  Vue.use(DsEmpty)
}

export default {
  install
}
