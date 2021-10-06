import DsEmpty from '../packages/empty'

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
