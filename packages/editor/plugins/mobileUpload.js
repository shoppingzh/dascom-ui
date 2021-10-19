import tinymce from 'tinymce'
import { chooseFile } from 'dascom-ui/lib/utils/dom'
import uploader from '../uploader'

function getAccept(type) {
  if (type === 'image') return 'image/*'
  else if (type === 'audio') return 'audio/*'
  else if (type === 'video') return 'video/*'
  return null
}

function getCapture(type) {
  if (type === 'image') return 'camera'
  else if (type === 'audio') return 'microphone'
  else if (type === 'video') return 'camcorder'
  return null
}

tinymce.PluginManager.add('mobileupload', (editor, url) => {
  const chooseFileAndUpload = async(type, immediate) => {
    try {
      const accept = getAccept(type)
      const capture = immediate ? getCapture(type) : null
      const files = await chooseFile(accept, capture)
      const { url } = await uploader.value(files[0])
      let el = null
      if (type === 'image') {
        el = `<img src="${url}" style="width: 100%;">`
      } else if (type === 'audio') {
        el = `<audio><source src="${url}"></audio>`
      } else if (type === 'video') {
        el = `<video><source src="${url}"></video>`
      }
      editor.insertContent(el)
    } catch {
      // nth
    }
  }

  editor.ui.registry.addButton('camera', {
    text: '拍照',
    onAction: () => {
      chooseFileAndUpload('image', true)
    }
  })
  editor.ui.registry.addButton('image', {
    // icon: 'image',
    text: '图片',
    onAction: () => {
      chooseFileAndUpload('image', false)
    }
  })
  editor.ui.registry.addButton('camcorder', {
    text: '录像',
    onAction: () => {
      chooseFileAndUpload('video', true)
    }
  })
  editor.ui.registry.addButton('video', {
    text: '视频',
    onAction: () => {
      chooseFileAndUpload('video', false)
    }
  })
  editor.ui.registry.addButton('audio', {
    text: '语音',
    onAction: () => {
      chooseFileAndUpload('audio', true)
    }
  })
  return {
  }
})
