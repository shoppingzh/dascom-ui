<template>
  <div class="tw-p-4">
    <ds-editor
      v-model="value"
      placeholder="请输入内容"
      :height="500"
      :options="{ }" />
    <!-- <div class="tw-py-5">
      <el-input v-model="value" type="textarea" :rows="10" />
    </div> -->
    <div class="tw-mt-4">
      <ds-editor
        v-model="value"
        @paste="handlePaste" />
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  setup() {
    const value = ref('Hello, tiny!')
    const handlePaste = e => {
      alert('不允许粘贴哦')
      e.preventDefault()
    }
    return {
      value,
      handlePaste
    }
  }
}
</script>

<style>

</style>
