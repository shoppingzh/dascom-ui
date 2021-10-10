<template>
  <div id="app">
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

export default {
  name: 'App',
  setup() {
    return {
    }
  }
}
</script>

<style>
</style>
