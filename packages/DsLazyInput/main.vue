<template>
  <el-input
    v-model="showValue"
    v-bind="$attrs"
    class="ds-lazy-input"
    v-on="listeners"
    @focus="handleStartInput"
    @change="handleSyncValue"
    @blur="handleEndInput" />
</template>

<script>
export default {
  name: 'DsLazyInput',
  props: {
    value: {
      type: [Number, String, Boolean],
      default: null
    },
    number: {
      type: Boolean,
      default: false
    },
    unit: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      inputValue: this.value,
      typing: false // 是否输入中
    }
  },
  computed: {
    listeners() {
      // 防止input事件被捕捉马上更新了绑定值
      delete this.$listeners['input']
      return this.$listeners
    },
    showValue: {
      get() {
        return this.typing
          ? this.inputValue
          : ((this.value && this.unit) ? `${this.value}${this.unit}` : this.value)
      },
      set(newVal) {
        this.inputValue = newVal
      }
    }
  },
  watch: {
    typing: {
      immediate: true,
      handler(newVal) {
        if (!newVal) {
          this.handleSyncValue()
        }
      }
    },
    inputValue: {
      immediate: true,
      handler(newVal) {
        if (this.number) {
          const isAllNumber = newVal && /^\d+$/g.test(newVal)
          if (!isAllNumber) {
            this.inputValue = this.inputValue.replace(/[^\d]/g, '')
          }
        }
      }
    }
  },
  methods: {
    handleStartInput() {
      this.typing = true
    },
    handleEndInput() {
      this.typing = false
    },
    // 同步值
    handleSyncValue() {
      this.$emit('input', this.inputValue)
    }
  }
}
</script>

<style>

</style>
