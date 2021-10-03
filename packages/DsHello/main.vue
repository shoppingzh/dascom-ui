<template>
  <div>{{ message }}</div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  name: 'DsHello',
  setup() {
    const message = ref('hello')
    return {
      message
    }
  }
}
</script>

<style>

</style>