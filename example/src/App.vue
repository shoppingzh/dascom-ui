<template>
  <div id="app">
    <ds-empty size="small" description="什么都没有哦">
      {{ hello }}
    </ds-empty>
    {{ hello }}
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
