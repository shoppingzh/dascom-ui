<template>
  <div class="ds-pdf">
    <template v-if="loading">
      <div class="ds-pdf__loading">
        <slot name="loading">
          加载中..
        </slot>
      </div>
    </template>
    <template v-else>
      <slot v-if="loadError" name="error" :error="loadError">
        <Error />
      </slot>
      <slot v-else-if="pdf" :pdf="pdf" />
    </template>
  </div>
</template>

<script>
import { provide } from '@vue/composition-api'
import usePdf from './usePdf'
import Error from './Error.vue'

export default {
  name: 'DsPdf',
  components: { Error },
  props: {
    src: { type: [String, File, Blob], required: true }
  },
  setup(props, ctx) {
    const { pdf, loading, loadError, load } = usePdf(props.src)

    const handleLoad = async() => {
      try {
        const doc = await load()
        ctx.emit('load-success', doc)
      } catch (err) {
        ctx.emit('load-error', err)
      }
    }

    provide('pdf', pdf)

    handleLoad()

    return {
      pdf,
      loading,
      loadError
    }
  }
}
</script>

<style>

</style>
