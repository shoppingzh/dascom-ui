<template>
  <div class="tw-relative">
    <ds-video
      ref="player"
      src="https://lf1-cdn-tos.bytescm.com/obj/cdn-static-resource/toutiao/xigua_cdn/xigua_video.mp4"
      poster="/1.png"
      caption="/1.vtt"
      :controls="controls"
      :loop="loop"
      playsinline
      :options="{ fill: true, fluid: false, playbackRates: [1, 1.5, 2] }"
      @timeupdate="handleTimeUpdate"
      @durationchange="handleDurationChange" />
    <div class="settings tw-p-3">
      <div class="tw-mt-4">
        <el-form size="small" label-width="100px" label-position="left" label-suffix="：">
          <el-form-item label="基操">
            <el-button size="small" type="primary" @click="play">播放</el-button>
            <el-button size="small" type="warning" @click="pause">暂停</el-button>
            <el-button size="small" type="danger" @click="stop">停止</el-button>
          </el-form-item>
          <el-form-item label="进度">
            <el-slider v-model="currentTime" :min="0" :max="duration" />
          </el-form-item>
          <el-form-item label="全屏操作">
            <el-radio-group v-model="fullscreenType">
              <el-radio :label="0">真·全屏</el-radio>
              <el-radio :label="1">网页全屏</el-radio>
              <el-button size="mini" type="primary"  @click="handleFullscreen">全屏 Go</el-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="控件栏">
            <el-radio-group v-model="controls">
              <el-radio :label="true">显示</el-radio>
              <el-radio :label="false">不显示</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="洗脑循环">
            <el-switch v-model="loop" />
          </el-form-item>
          <el-form-item label="设置音量">
            <el-slider v-model="volume" :min="0" :max="1" :step="0.1" />
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from '@vue/composition-api'

export default {
  setup() {
    const player = ref(null)
    const controls = ref(true)
    const loop = ref(false)
    const fullscreenType = ref(0)
    const volume = ref(0)
    const duration = ref(0)
    const currentTime = ref(0)

    const play = () => {
      player.value.play()
    }
    const pause = () => {
      player.value.pause()
    }
    const stop = () => {
      player.value.stop()
    }
    const fullscreen = () => {
      player.value.fullscreen(true)
    }
    const fakeFullscreen = () => {
      player.value.player.enterFullWindow()
    }
    const handleTimeUpdate = () => {
      currentTime.value = player.value.currentTime()
    }
    const handleDurationChange = () => {
      duration.value = player.value.duration()
    }
    const handleFullscreen = () => {
      fullscreenType.value === 0 ? fullscreen() : fakeFullscreen()
    }

    onMounted(() => {
      volume.value = player.value.volume()
      currentTime.value = player.value.currentTime()
    })

    watch(volume, (newVal) => {
      player.value.volume(newVal)
    })

    return {
      player,
      controls,
      loop,
      fullscreenType,
      volume,
      duration,
      currentTime,

      play,
      pause,
      stop,
      fullscreen,
      fakeFullscreen,
      handleTimeUpdate,
      handleDurationChange,
      handleFullscreen
    }
  }
}
</script>

<style scoped>
  .ds-video {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    height: 500px;
  }
  .settings {
    padding-top: 520px;
  }
</style>