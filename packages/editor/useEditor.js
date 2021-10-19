import { ref, onUnmounted, watch } from '@vue/composition-api'
import tinymce from 'tinymce'
import { merge } from 'lodash'
import defaultOptions from './options/default'

export default function(content, height, placeholder, options) {
  const textarea = ref(null)
  const editor = ref(null)
  const userChange = ref(null) // 是否为用户改变content

  const getHtml = () => {
    return editor.value ? editor.value.getContent() : ''
  }
  const getText = () => {
    return editor.value ? editor.value.getContent({ format: 'text' }) : ''
  }
  const setHtml = html => {
    editor.value && editor.value.setContent(html)
  }

  const init = () => {
    return new Promise((resolve, reject) => {
      tinymce.init({
        ...merge({}, defaultOptions, options),
        target: textarea.value,
        height: height.value,
        placeholder: placeholder.value,
        setup: editorIns => {
          editor.value = editorIns
          editorIns.on('init', () => {
            setHtml(content.value)
            resolve(editorIns)
          })
          // TODO: 这里可能还需要扩展，考虑更多的情况
          editorIns.on('change keyup undo redo', (e) => {
            userChange.value = true
            content.value = getHtml()
          })
        }
      })
    })
  }

  const destroy = () => {
    if (!editor.value) return
    editor.vlaue.destroy()
  }

  watch(() => content.value, newVal => {
    if (!userChange.value) setHtml(newVal)
    userChange.value = false
  })

  onUnmounted(() => {
    destroy()
  })

  return {
    textarea, // HTMLTextareaElement
    editor, // tinymce编辑器
    content,

    getHtml,
    getText,
    setHtml,
    init, // 初始化
    destroy // 销毁
  }
}
