<template>
  <ds-pdf
    ref="el"
    :src="src"
    @load-success="handlePdfLoaded">
    <ds-pdf-page
      v-for="number in pageCount"
      ref="pages"
      :key="number"
      :number="number"
      :width="pageWidth"
      :scale="pageScale"
      :rotate="pageRotate"
      lazy-render
      @load-success="handlePageLoaded(number, ...arguments)" />
  </ds-pdf>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api'
import useScroll from './useScroll'

export default {
  name: 'DsPdfContent',
  props: {
    src: { type: [String, Blob, File], required: true },
    pageWidth: { type: Number, default: null },
    pageScale: { type: Number, default: 1.0 },
    pageRotate: { type: Number, default: 0 },
    pageClass: { type: [String, Array, Function], default: null },
    pageStyle: { type: [String, Object, Function], default: null }
  },
  setup(props, ctx) {
    const el = ref(null)
    const { onScroll, scroller } = useScroll(el)
    const pages = ref(null)
    const pageCount = ref(0)
    // const pagePositions = ref([])
    // TODO: 如何计算滚动区域内的任意后代元素位于滚动区域的位置？

    const handlePdfLoaded = ({ numPages }) => {
      pageCount.value = numPages
    }
    const handlePageLoaded = (number) => {
      // console.log(number + ', ' + pages.value[number - 1].number)
      const page = pages.value[number - 1]
      const rect = page.$el.getBoundingClientRect()
      if (number === 1 || number === 2) console.log(rect)
    }

    onMounted(() => {
      console.log(scroller.value.getBoundingClientRect())
    })

    onScroll(e => {
    })

    return {
      el,
      pages,
      pageCount,

      handlePdfLoaded,
      handlePageLoaded
    }
  }
}
</script>

<style>

</style>
