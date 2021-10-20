import Vue from 'vue'
import DascomUI from 'dascom-ui'
import './theme.scss'
import * as fileApi from '@/api/file'
const options = {
  DsEditor: {
    upload: (file) => {
      return new Promise(async(resolve, reject) => {
        try {
          const { data } = await fileApi.upload(file)
          resolve({
            url: `http://192.168.1.43${data.ossUrl}`,
            name: data.fileName
          })
        } catch (err) {
          reject(err)
        }
      })
    }
  }
}
Vue.use(DascomUI, options)

export default DascomUI
