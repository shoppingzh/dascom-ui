<template>
  <div ref="el" class="ds-editor">
    <textarea ref="textarea" />
  </div>
</template>

<script>
import { toRefs, computed, onMounted } from '@vue/composition-api'
import useEditor from './useEditor'
import { NATIVE_EVENTS } from './const'

export default {
  name: 'DsEditor',
  props: {
    value: { type: String, default: null },
    height: { type: Number, default: 300 },
    placeholder: { type: String, default: null },
    options: { type: Object, default: () => ({}) }
  },
  setup(props, ctx) {
    const { value, height, placeholder } = toRefs(props)
    const content = computed({
      get() {
        return value.value
      },
      set(newVal) {
        ctx.emit('input', newVal)
      }
    })
    const { textarea, init: doInit, getHtml, getText } = useEditor(content, height, placeholder, props.options)

    const init = async() => {
      const editor = await doInit()
      NATIVE_EVENTS.forEach(eventName => {
        editor.on(eventName, function() {
          ctx.emit(eventName, ...arguments)
        })
      })
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
