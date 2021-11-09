<template>
  <div ref="el" class="ds-editor">
    <textarea ref="textarea" />
  </div>
</template>

<script>
import { toRefs, computed, onMounted } from '@vue/composition-api'
import useEditor from './useEditor'

export default {
  name: 'DsEditor',
  props: {
    value: { type: String, default: null },
    height: { type: Number, default: 300 },
    placeholder: { type: String, default: null },
    allowPaste: { type: Boolean, default: true },
    options: { type: Object, default: () => ({}) }
  },
  setup(props, ctx) {
    const { value, height, placeholder, allowPaste } = toRefs(props)
    const content = computed({
      get() {
        return value.value
      },
      set(newVal) {
        ctx.emit('input', newVal)
      }
    })
    const { textarea, init: doInit, getHtml, getText } = useEditor(content, height, placeholder, allowPaste, props.options)

    const init = async() => {
      const editor = await doInit()
      ctx.emit('init', editor)
    }

    onMounted(() => {
      init()
    })
    return {
      textarea,

      getHtml,
      getText
    }
  }
}
</script>

<style>

</style>
