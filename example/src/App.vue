<template>
  <div id="app">
    <ds-empty size="small" description="什么都没有哦">
      {{ hello }}
    </ds-empty>
  </div>
</template>

<script>
import useNow from 'dascom-ui/lib/hooks/useNow'

export default {
  name: 'App',
  setup() {
    const { datetimeDesc } = useNow()
    return {
      hello: datetimeDesc
    }
  }
}
</script>

<style>
</style>
