<template>
  <div class="tw-p-4">
    <ds-editor
      v-model="value"
      placeholder="请输入内容"
      :allow-paste="false"
      :height="500"
      :options="{ }" />
    <!-- <div class="tw-py-5">
      <el-input v-model="value" type="textarea" :rows="10" />
    </div> -->
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  setup() {
    const value = ref('Hello, tiny!')
    return {
      value
    }
  }
}
</script>

<style>

</style>
