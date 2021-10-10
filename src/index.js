import DsEmpty from '../packages/empty'
import DsPdf from '../packages/pdf'
import DsPdfPage from '../packages/pdf-page'

const components = [
  DsEmpty,
  DsPdf,
  DsPdfPage
]

function install(Vue) {
  components.forEach(component => {
    Vue.use(component)
  })
}

export default {
  install
}
