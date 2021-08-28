import DsEmpty from '../packages/DsEmpty/index'
import DsLazyInput from '../packages/DsLazyInput/index'
import DsRollText from '../packages/DsRollText'

function install(Vue) {
  Vue.use(DsEmpty)
  Vue.use(DsLazyInput)
  Vue.use(DsRollText)
}

export default {
  install
}
