<template>
  <img src="./image.svg">
</template>

<script>
import { getType } from 'tongpo/lib/file'
import { computed } from '@vue/composition-api'

export default {
  name: 'DsFileThumb',
  props: {
    contentType: { type: String, default: null }
  },
  setup(props, ctx) {
    const type = computed(() => getType(props.contentType))
    console.log(type)
    return {}
  }
}
</script>

<style>

</style>
