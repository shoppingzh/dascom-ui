/**
 * 获取指定元素的滚动容器
 * @param {HTMLElment} el 元素
 */
export function getScrollContainer(el) {
  if (!el) throw new Error('el must not be null!')
  let current = el
  while (current) {
    if ([window, document, document.documentElement].includes(current)) return window
    const computedStyle = window.getComputedStyle(current)
    const overflowY = computedStyle.getPropertyValue('overflow-y')
    const isScroll = overflowY && overflowY.match(/(auto|scroll|overlay)/)
    if (isScroll) return current
    current = current.parentNode
  }

  return null
}

/**
 * 判断元素是否位于容器内
 * @param {HTMLElement} el 元素
 * @param {Window|HtmlElement} container 容器
 */
export function isInContainer(el, container) {
  if (!el) throw new Error('el must not be null!')
  let containerRect = null
  if ([window, document, null, undefined].includes(container)) {
    containerRect = {
      left: 0,
      right: window.innerWidth,
      top: 0,
      bottom: window.innerHeight
    }
  } else {
    containerRect = container.getBoundingClientRect()
  }
  const srcRect = el.getBoundingClientRect()
  return srcRect.top <= containerRect.bottom && srcRect.bottom >= containerRect.top
}

/**
 * 选择文件
 */
export function chooseFile(accept, capture) {
  return new Promise((resolve, reject) => {
    const ele = document.createElement('input')
    ele.type = 'file'
    if (accept) ele.accept = accept
    if (capture) ele.setAttribute('capture', capture)
    console.log(capture)
    ele.style.display = 'none'
    ele.addEventListener('change', function() {
      document.body.removeChild(ele)
      resolve(this.files)
    }, false)
    document.body.appendChild(ele)
    ele.click()
  })
}
