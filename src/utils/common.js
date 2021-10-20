import isMobile from 'ismobilejs/dist/isMobile.min.js'

/**
 * 获取当前平台
 * @returns app/pc
 */
export function getPlatform() {
  console.log(isMobile)
  return (isMobile.any || isMobile.phone) ? 'app' : 'pc'
}
