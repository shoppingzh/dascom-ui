import Component from './main.vue'
import uploader from './uploader'
import './plugins/mobileUpload'
import './icons'

Component.install = function(Vue, options = {}) {
  uploader.value = options.upload
  Vue.component(Component.name, Component)
}

export default Component
