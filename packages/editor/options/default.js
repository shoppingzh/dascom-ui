import base from './base'

export default {
  ...base,
  menubar: '',
  image_uploadtab: true,
  toolbar: `undo redo
    | fontsizeselect forecolor bold italic underline 
    | alignleft aligncenter alignright alignjustify 
    | image link table formula
    | preview fullscreen`,
  mobile: {
    toolbar: `
      camera image camcorder video audio
    `
  }
}
