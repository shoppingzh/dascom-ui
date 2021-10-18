<template>
  <div class="ds-video">
    <video ref="video" class="video-js vjs-dascom-skin">
      <source v-for="source in sources" :key="source" :src="source" type="video/mp4">
      <track v-if="caption" kind="captions" :src="caption" srclang="zh_CN" label="中文" default>
    </video>
  </div>
</template>

<script>
import { toRefs, reactive, onMounted } from '@vue/composition-api'
import useVideo from './useVideo'
import { NATIVE_EVENTS } from './config'

export default {
  name: 'DsVideo',
  props: {
    src: { type: [String, Array], required: true },
    poster: { type: String, default: null },
    caption: { type: String, default: null },
    controls: { type: Boolean, default: true },
    autoplay: { type: Boolean, default: false },
    muted: { type: Boolean, default: false },
    loop: { type: Boolean, default: false },
    playsinline: { type: Boolean, default: false },
    options: { type: Object, default: () => ({}) }
  },
  setup(props, ctx) {
    const { src, poster, caption, controls, autoplay, muted, loop, playsinline, options } = toRefs(props)
    const {
      video,
      player,
      sources,
      init,
      play,
      pause,
      currentTime,
      duration,
      getRemainTime,
      fullscreen,
      isFullscreen,
      volume
    } = useVideo(src, poster, caption, reactive({
      controls,
      autoplay,
      muted,
      loop
    }), playsinline, options)

    onMounted(() => {
      init().then(() => {
        NATIVE_EVENTS.forEach(eventName => {
          player.value.on(eventName, (e) => {
            ctx.emit(eventName, e)
          })
        })
      })
    })

    return {
      video,
      player,
      sources,

      play,
      pause,
      currentTime,
      duration,
      getRemainTime,
      fullscreen,
      isFullscreen,
      volume
    }
  }
}
</script>
