<template>
  <div>
    <ds-pdf src="/1.pdf" @load-success="handlePdfLoaded">
      <ds-pdf-page
        :key="currentPage"
        :number="currentPage"
        :width="width"
        :scale="scale"
        :rotate="rotate" />
    </ds-pdf>
    <div class="tw-mt-5 tw-text-center">
      <div class="tw-p-2">
        <el-button size="small" @click="scale += 0.1">放大</el-button>
        <el-button size="small" @click="scale -= 0.1">缩小</el-button>
        <el-button size="small" @click="rotate += 90">旋转</el-button>
      </div>
      <div class="tw-p-2">
        <el-input-number v-model="width" :controls="false" class="tw-mr-2" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  setup() {
    const currentPage = ref(1)
    const pageCount = ref(0)
    const width = ref(300)
    const scale = ref(1)
    const rotate = ref(0)
    const handlePdfLoaded = ({ numPages }) => {
      pageCount.value = numPages
    }
    return {
      currentPage,
      pageCount,
      width,
      scale,
      rotate,

      handlePdfLoaded
    }
  }
}
</script>

<style>

</style>
