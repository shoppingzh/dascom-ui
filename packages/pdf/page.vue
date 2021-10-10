<template>
  <div class="ds-pdf-page">
    <canvas ref="layer" />
  </div>
</template>

<script>
import { inject, nextTick, onMounted, ref } from '@vue/composition-api'
import usePdfPage from './usePdfPage'

export default {
  name: 'DsPdfPage',
  props: {
    number: { type: Number, default: 1 }
  },
  setup(props, ctx) {
    const { page, loading, layer, render } = usePdfPage(props.number)

    onMounted(() => {
      render()
    })

    return {
      layer
    }
  }
}
</script>

<style>

</style>
