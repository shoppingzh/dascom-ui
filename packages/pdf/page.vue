<template>
  <div ref="el" class="ds-pdf-page" :style="{ ...viewportStyle }">
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
import { ref, computed, onMounted, toRefs, watch } from '@vue/composition-api'
import usePdfPage from './usePdfPage'

export default {
  name: 'DsPdfPage',
  props: {
    number: { type: Number, default: 1 },
    width: { type: Number, default: null },
    scale: { type: Number, default: 1.0 },
    rotate: { type: Number, default: 0 },
    renderText: { type: Boolean, default: false },
    lazyRender: { type: Boolean, default: false }
  },
  setup(props, ctx) {
    const el = ref(null)
    const { width, scale, rotate, renderText: isRenderText, lazyRender } = toRefs(props)
    const { loading, layer, textLayer, viewportScale, viewport, load: doLoad, render: doRender } = usePdfPage(props.number, width, scale, rotate, isRenderText)

    const viewportStyle = computed(() => viewport.value ? ({
      width: `${viewport.value.width}px`,
      height: `${viewport.value.height}px`
    }) : null)

    const load = async() => {
      try {
        const data = await doLoad()
        ctx.emit('load-success', data)
      } catch (err) {
        ctx.emit('load-error', err)
      }
    }

    const render = async() => {
      try {
        await doRender()
        ctx.emit('render-success')
      } catch (err) {
        ctx.emit('render-error', err)
      }
    }

    const tryRender = () => {
      if (lazyRender.value) return
      render()
    }

    onMounted(async() => {
      await load()
      tryRender()
    })

    watch([width, scale, rotate, isRenderText], () => {
      tryRender()
    })

    return {
      el,

      loading,
      layer,
      textLayer,
      viewportScale,
      viewport,

      viewportStyle,

      render
    }
  }
}
</script>

<style>

</style>
