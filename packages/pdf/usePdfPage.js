import { inject, ref } from '@vue/composition-api'

export default function(number = 1) {
  const pdf = inject('pdf')
  const page = ref(null)
  const loading = ref(false)
  const layer = ref(null)

  const load = () => {
    return new Promise(async(resolve, reject) => {
      try {
        loading.value = true
        const pageIns = await pdf.value.getPage(number)
        page.value = pageIns
        resolve(pageIns)
      } catch (err) {
        reject(err)
      } finally {
        loading.value = false
      }
    })
  }

  const render = () => {
    return new Promise(async(resolve, reject) => {
      try {
        const pageIns = await load()
        const viewport = pageIns.getViewport({
          scale: 1.5
        })
        const canvas = layer.value
        const ctx = canvas.getContext('2d')
        canvas.width = viewport.width
        canvas.height = viewport.height
  
        pageIns.render({
          canvasContext: ctx,
          transform: null,
          viewport
        })
      } catch (err) {
        reject(err)
      }
    })
  }

  return {
    page,
    loading,
    layer,
    render
  }
}
