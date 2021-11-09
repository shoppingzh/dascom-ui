import { ref, computed, watch } from '@vue/composition-api'
import videojs from 'video.js'
import zh_CN from 'video.js/dist/lang/zh-CN.json'
import { merge } from 'lodash/object'
import SmartFullscreen from './smartFullscreen'

export default function(src, poster, caption, nativeSettings, playsinline, windowFullscreen, options) {
  const player = ref(null)
  const video = ref(null)
  const smartFullscreen = ref(null)
  const sources = computed(() => typeof src.value === 'string' ? [src.value] : src.value)

  const play = () => {
    return player.value.play()
  }
  const pause = () => {
    return player.value.pause()
  }
  const currentTime = value => {
    return player.value.currentTime(value)
  }
  const duration = () => {
    return player.value.duration()
  }
  const getRemainTime = () => {
    return player.value.remainingTime()
  }
  const isFullscreen = () => {
    return smartFullscreen.state
  }
  const volume = value => {
    return player.value.volume(value)
  }

  const init = () => {
    return new Promise(async(resolve, reject) => {
      player.value = videojs(video.value, merge({}, {
        ...nativeSettings,
        languages: { zh_CN },
        language: 'zh_CN',
        fluid: true
      }, options.value), (p) => {
        resolve(player.value)
      })
      smartFullscreen.value = new SmartFullscreen(player.value, windowFullscreen.value)
      if (poster.value) {
        player.value.poster(poster.value)
      }
      player.value.playsinline(playsinline.value)
    })
  }

  // 操作区
  watch(() => nativeSettings.controls, (newVal) => {
    player.value.controls(newVal)
  })
  watch(() => nativeSettings.loop, newVal => {
    player.value.loop(newVal)
  })
  watch(windowFullscreen, newVal => {
    smartFullscreen.value && (smartFullscreen.value.windowFullscreen = newVal)
  })

  return {
    player, // video播放器
    video, // HTMLVideoElement
    sources, // 视频源

    init,
    play,
    pause,
    currentTime,
    duration,
    getRemainTime,
    isFullscreen,
    volume
  }
}
