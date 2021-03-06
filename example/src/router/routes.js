export default [{
  path: '/video',
  component: () => import('@/views/video/index')
}, {
  path: '/pdf',
  component: () => import('@/views/pdf/index')
}, {
  path: '/pdf/single',
  component: () => import('@/views/pdf/single')
}, {
  path: '/pdf/page',
  component: () => import('@/views/pdf/page')
}, {
  path: '/editor',
  component: () => import('@/views/editor/index')
}, {
  path: '/skeleton',
  component: () => import('@/views/skeleton/index')
}, {
  path: '/file-thumb',
  component: () => import('@/views/file-thumb/index')
}]
