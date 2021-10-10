import Vue from 'vue'
import * as PDFJS from 'pdfjs-dist'
import PDFJSWorker from 'pdfjs-dist/build/pdf.worker.entry'
PDFJS.GlobalWorkerOptions.workerSrc = PDFJSWorker
// plugins
import '@/plugins/composition-api'
import '@/plugins/dascom-ui'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
