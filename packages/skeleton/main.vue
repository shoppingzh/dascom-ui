<script>
import Item from './item.vue'

export default {
  name: 'DsSkeleton',
  components: { Item },
  props: {
    loading: { type: Boolean, default: true },
    animated: { type: Boolean, default: false },
    rows: { type: Number, default: 3 },
    avatar: { type: Boolean, default: false },
    repeat: { type: Number, default: 1 },
    repeatGap: { type: Number, default: 30 }
  },
  render() {
    const templateNode = this.$slots.template || [this.avatar ? (
      <Item
        type="avatar"
        shape="circle" />
    ) : null, (
      <div class="ds-skeleton__content">
        <Item type="title" />
        <Item
          type="paragraph"
          options={{ rows: this.rows }} />
      </div>
    )]

    let repeatTemplateNodes = templateNode
    if (this.repeat > 1) {
      repeatTemplateNodes = []
      for (let i = 0; i < this.repeat; i++) {
        repeatTemplateNodes.push((
          <div style={{ marginBottom: this.repeatGap + 'px' }}>
            {templateNode}
          </div>
        ))
      }
    }

    const defaultNode = (!this.$slots.default || this.$slots.default.length > 1) ? (<div>{ this.$slots.default }</div>) : this.$slots.default[0]

    return this.loading ? (
      <div
        staticClass="ds-skeleton"
        class={{ 'is-animated': this.animated, 'ds-skeleton--with-avatar': this.avatar }}>
        {repeatTemplateNodes}
      </div>
    ) : defaultNode
  }
}
</script>
