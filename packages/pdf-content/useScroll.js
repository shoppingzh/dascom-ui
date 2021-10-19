import { ref, onMounted, onUnmounted } from '@vue/composition-api'
import { getScrollContainer } from 'dascom-ui/lib/utils/dom'
import { throttle } from 'lodash'

export default function(el) {
  const scroller = ref(null)
  const listeners = []
  const scrollHandler = throttle(e => {
    listeners.forEach(listener => {
      listener(e)
    })
  }, 300)
  const onScroll = (func) => {
    listeners.push(func)
    return () => {
      const index = listeners.indexOf(func)
      if (index < 0) return
      listeners.splice(index, 1)
    }
  }

  onMounted(() => {
    // 获取滚动容器
    scroller.value = getScrollContainer(el.value.$el)
    if (scroller.value) {
      scroller.value.addEventListener('scroll', scrollHandler)
    }
  })

  onUnmounted(() => {
    if (scroller.value) {
      scroller.value.removeEventListener('scroll', scrollHandler)
      listeners.splice(0)
    }
  })

  return {
    scroller, // 滚动容器

    onScroll
  }
}
