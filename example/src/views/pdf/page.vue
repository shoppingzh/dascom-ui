<template>
  <div>
    <div style="padding: 30px;"></div>
    <div style="width: 1200px; margin: auto;">
      <div class="wrap">
        <ds-pdf-content
          src="/1.pdf"
          :page-width="pageWidth" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  setup() {
    const pageWidth = ref(300)
    return {
      pageWidth
    }
  }
}
</script>

<style scoped>
  .wrap {
    height: 700px;
    padding: 20px;
    background-color: lightyellow;
    overflow: auto;
  }
  /deep/ .ds-pdf-page {
    margin-bottom: 12px;
    background-color: #eee;
    border: 1px solid #ccc;
  }
</style>
