import service from '@/service'

export function upload(file) {
  const data = new FormData()
  data.append('file', file)
  return service({
    url: '/base/file/upload',
    method: 'post',
    data
  })
}
