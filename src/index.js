import DsEmpty from '../packages/empty'
import DsPdf from '../packages/pdf'
import DsPdfPage from '../packages/pdf-page'
import DsVideo from '../packages/video'
import DsEditor from '../packages/editor'

const components = [
  DsEmpty,
  DsPdf,
  DsPdfPage,
  DsVideo,
  DsEditor
]

function install(Vue) {
  components.forEach(component => {
    Vue.use(component)
  })
}

export default {
  install
}
