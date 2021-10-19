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
}]
