<template>
  <div class="ds-roll-text">
    <span
      ref="inner"
      class="ds-roll-text__inner"
      :style="{ animationDelay: delay + 's', animationDuration: time + 's' }">
      <i v-if="icon" :class="[icon]" /> {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'DsRollText',
  props: {
    text: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: null
    },
    frameDuration: {
      type: Number,
      default: 10
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      time: 0
    }
  },
  computed: {
    resetProp() {
      return {
        text: this.text,
        frameDuration: this.frameDuration
      }
    }
  },
  watch: {
    resetProp: {
      immediate: true,
      handler: 'reset'
    }
  },
  methods: {
    reset() {
      this.$nextTick(() => {
        const container = this.$el
        const inner = this.$refs.inner
        const cw = container.clientWidth
        const w = inner.clientWidth
        this.time = w > cw ? (w / cw * this.frameDuration) : 0
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @keyframes roll {
    0% {
      transform: translate(0);
    }
    100% {
      transform: translate(-100%);
    }
  }
  .ds-roll-text {
    overflow: hidden;
    &__inner {
      display: inline-block;
      white-space: nowrap;
      animation-name: roll;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-delay: 10s;
    }
  }
</style>
