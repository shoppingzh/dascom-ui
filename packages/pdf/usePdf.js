import * as PDFJS from 'pdfjs-dist'
import PDFJSWorker from 'pdfjs-dist/es5/build/pdf.worker.entry'
import { ref, onUnmounted } from '@vue/composition-api'
PDFJS.GlobalWorkerOptions.workerSrc = PDFJSWorker

export default function(url) {
  const pdf = ref(null)
  const loadError = ref(null)
  const loading = ref(false)

  const load = () => {
    return new Promise(async(resolve, reject) => {
      try {
        loading.value = true
        const pdfIns = await PDFJS.getDocument(url).promise
        pdf.value = pdfIns
        loadError.value = null
        resolve(pdfIns)
      } catch (err) {
        loadError.value = err
      } finally {
        loading.value = false
      }
    })
  }

  const destroy = () => {
    pdf.value && pdf.value.destroy()
  }

  onUnmounted(() => {
    destroy()
  })

  return {
    pdf,
    loadError,
    loading,

    load
  }
}
