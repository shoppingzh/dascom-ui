import * as PDFJS from 'pdfjs-dist'
import { ref } from '@vue/composition-api'

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

  return {
    pdf,
    loadError,
    loading,

    load
  }
}
