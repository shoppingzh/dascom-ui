import axios from 'axios'

const service = axios.create({
  baseURL: 'http://192.168.1.43/api',
  timeout: 60 * 1000
})

service.interceptors.response.use(responseData => {
  const { data } = responseData
  if (data.success) {
    return Promise.resolve(data)
  }
  return Promise.reject()
})

export default service
