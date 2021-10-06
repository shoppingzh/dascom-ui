<template>
  <div class="ds-empty" :class="classes">
    <div class="ds-empty__image">
      <slot name="image">
        <img v-if="image" :src="image">
        <Icon v-else />
      </slot>
    </div>
    <div class="ds-empty__description">
      <slot>
        {{ description }}
      </slot>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
import Icon from './Icon.vue'

export default {
  name: 'DsEmpty',
  components: { Icon },
  props: {
    size: { type: String, default: null },
    image: { type: String, default: null },
    description: { type: String, default: null }
  },
  setup(props, ctx) {
    const classes = computed(() => (props.size ? [`ds-empty--${props.size}`] : null))
    return {
      classes
    }
  }
}
</script>
