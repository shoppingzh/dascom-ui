import tinymce from 'tinymce'
import { getAll } from 'tinymce-dascom-icons'

tinymce.IconManager.add('dascom', {
  icons: getAll()
})
