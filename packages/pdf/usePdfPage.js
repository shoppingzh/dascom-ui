import * as PDFJS from 'pdfjs-dist'
import { inject, ref, computed, reactive } from '@vue/composition-api'

export default function(number = 1, width, scale, rotate, isRenderText) {
  const pdf = inject('pdf')
  const page = ref(null)
  const loading = reactive({
    load: false,
    render: false
  })
  const layer = ref(null)
  const textLayer = ref(null)
  const viewportScale = computed(() => {
    if (!page.value) return null
    const viewport = page.value.getViewport({ scale: 1, rotation: rotate.value })
    if (!width.value) return scale.value
    return width.value / viewport.width * scale.value
  })
  const viewportRotate = computed(() => rotate.value)
  const renderViewport = computed(() => {
    if (!page.value) return null
    return page.value.getViewport({ scale: viewportScale.value * window.devicePixelRatio, rotation: viewportRotate.value })
  })
  const viewport = computed(() => !page.value ? null : page.value.getViewport({ scale: viewportScale.value, rotation: rotate.value }))

  const load = () => {
    return new Promise(async(resolve, reject) => {
      try {
        loading.load = true
        const pageIns = await pdf.value.getPage(number)
        page.value = pageIns
        resolve(pageIns)
      } catch (err) {
        reject(err)
      } finally {
        loading.load = false
      }
    })
  }

  const renderText = () => {
    return new Promise(async(resolve, reject) => {
      try {
        const textContent = await page.value.getTextContent()
        PDFJS.renderTextLayer({
          textContent,
          container: textLayer.value,
          viewport: viewport.value
        })

        resolve()
      } catch (err) {
        reject(err)
      }
    })
  }

  const render = () => {
    return new Promise(async(resolve, reject) => {
      try {
        loading.render = true
        const pageIns = page.value
        const canvas = layer.value
        const ctx = canvas.getContext('2d')
        canvas.width = renderViewport.value.width
        canvas.height = renderViewport.value.height
        canvas.style.width = `${viewport.value.width}px`
        canvas.style.height = `${viewport.value.height}px`
  
        await pageIns.render({
          canvasContext: ctx,
          transform: null,
          viewport: renderViewport.value
        }).promise

        if (isRenderText.value) {
          try {
            await renderText()
          } catch (err) {
            // 不处理文本渲染错误
            console.error(err)
          }
        }

        resolve()
      } catch (err) {
        reject(err)
      } finally {
        loading.render = false
      }
    })
  }

  return {
    page,
    loading,
    layer, // 渲染canvas
    textLayer, // 文本渲染容器(HTMLElement)
    viewportScale, // 页视图的最终缩放大小
    viewportRotate, // 页视图的最终旋转角度
    viewport, // 页视图

    load,
    renderText, // 渲染文本内容
    render
  }
}
