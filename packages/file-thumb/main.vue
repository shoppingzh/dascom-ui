<template>
  <div v-html="svg">
    {{ svg }}
  </div>
</template>

<script>
import { getType } from 'tongpo/lib/file'
import { computed } from '@vue/composition-api'
import svg from './image.svg'
console.log(svg)

export default {
  name: 'DsFileThumb',
  props: {
    contentType: { type: String, default: null }
  },
  setup(props, ctx) {
    const type = computed(() => getType(props.contentType))
    console.log(type)
    return {
      svg
    }
  }
}
</script>

<style>

</style>
