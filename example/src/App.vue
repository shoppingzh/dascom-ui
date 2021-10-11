<template>
  <div id="app">
    {{ hello }}
    <ds-pdf src="/1.pdf">
      <template #default="{ pdf }">
        <ds-pdf-page
          v-for="number in pdf.numPages"
          :key="number"
          :number="number" />
      </template>
    </ds-pdf>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'App',
  setup() {
    return {
      hello: ref('hello')
    }
  }
}
</script>

<style>
</style>
