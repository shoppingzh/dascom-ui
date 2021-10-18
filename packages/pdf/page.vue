<template>
  <div class="ds-pdf-page" :style="{ ...viewportStyle }">
    <template v-if="loading.load">
      <slot name="loading" />
    </template>
    <template v-else>
      <template v-if="loading.render">
        <slot name="rendering" />
      </template>
      <canvas ref="layer" />
      <div v-if="renderText" ref="textLayer" class="ds-pdf-page__text" />
    </template>
  </div>
</template>

<script>
import { computed, onMounted, toRefs, watch } from '@vue/composition-api'
import usePdfPage from './usePdfPage'

export default {
  name: 'DsPdfPage',
  props: {
    number: { type: Number, default: 1 },
    width: { type: Number, default: null },
    scale: { type: Number, default: 1.0 },
    rotate: { type: Number, default: 0 },
    renderText: { type: Boolean, default: false }
  },
  setup(props, ctx) {
    const { width, scale, rotate, renderText: isRenderText } = toRefs(props)
    const { loading, layer, textLayer, viewportScale, viewport, load, render } = usePdfPage(props.number, width, scale, rotate, isRenderText)

    const viewportStyle = computed(() => viewport.value ? ({
      width: `${viewport.value.width}px`,
      height: `${viewport.value.height}px`
    }) : null)

    const handleLoad = async() => {
      try {
        const data = await load()
        ctx.emit('load-success', data)
      } catch (err) {
        ctx.emit('load-error', err)
      }
    }

    const handleRender = async() => {
      try {
        await render()
        ctx.emit('render-success')
      } catch (err) {
        ctx.emit('render-error', err)
      }
    }

    onMounted(async() => {
      await handleLoad()
      handleRender()
    })

    watch([width, scale, rotate, isRenderText], () => {
      handleRender()
    })

    return {
      loading,
      layer,
      textLayer,
      viewportScale,
      viewport,

      viewportStyle
    }
  }
}
</script>

<style>

</style>
