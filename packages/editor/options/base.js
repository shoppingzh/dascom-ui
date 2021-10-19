import uploader from '../uploader'
import { chooseFile } from 'dascom-ui/lib/utils/dom'

export default {
  plugins: 'image media link table preview fullscreen mobileupload',
  branding: false,
  language: 'zh_CN',
  file_picker_types: 'image media file',
  skin: 'dascom',
  file_picker_callback: (cb, value, meta) => {
    const filetype = meta.filetype
    chooseFile().then(files => {
      if (!uploader.value) return
      uploader.value(files[0]).then((data) => {
        const url = data.url
        if (filetype === 'image') {
          cb(url, { alt: data.name })
        } else if (filetype === 'file') {
          cb(url, { text: data.name, title: data.name, target: '_blank' })
        }
      })
    })
  }
}
