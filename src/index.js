import DsEmpty from '../packages/empty'
import DsPdf from '../packages/pdf'
import DsPdfPage from '../packages/pdf-page'
import DsVideo from '../packages/video'
import DsEditor from '../packages/editor'
import DsPdfContent from '../packages/pdf-content'

const components = [
  DsEmpty,
  DsPdf,
  DsPdfPage,
  DsVideo,
  DsEditor,
  DsPdfContent
]

function install(Vue, componentOptions) {
  componentOptions = componentOptions || {}
  components.forEach(component => {
    Vue.use(component, componentOptions[component.name])
  })
}

export default {
  install
}
