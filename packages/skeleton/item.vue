<template>
  <div
    v-if="type === 'paragraph' && repeat > 1">
    <div
      v-for="r in repeat"
      :key="r"
      class="ds-skeleton-item"
      :class="[...classes, { 'is-first': r <= 1, 'is-last': r >= repeat }]" />
  </div>
  <div
    v-else
    class="ds-skeleton-item"
    :class="classes" />
</template>

<script>
export default {
  name: 'DsSkeletonItem',
  props: {
    type: { type: String, default: null },
    options: { type: Object, default: null },
    shape: { type: String, default: 'round' },
    size: { type: String, default: null }
  },
  computed: {
    typeOptions() {
      return this.options || {}
    },
    repeat() {
      return this.type === 'paragraph' ? (this.typeOptions.rows || 1) : 1
    },
    classes() {
      const data = []
      if (this.type) {
        data.push(`ds-skeleton-item--${this.type}`)
      }
      if (this.shape) {
        data.push(`is-${this.shape}`)
      }
      return data
    }
  }
}
</script>

