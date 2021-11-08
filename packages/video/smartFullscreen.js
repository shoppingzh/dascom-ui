import videojs from 'video.js'
const Button = videojs.getComponent('Button')

export default class SmartFullscreen {
  constructor(player, windowFullscreen) {
    this.player = player
    this.windowFullscreen = windowFullscreen
    this.state = this.player.isFullscreen()
    this.init()
  }

  init() {
    this.player.on('fullscreenchange', e => {
      this.state = this.player.isFullscreen()
    })
    this.player.on('enterFullWindow', e => {
      this.state = true
    })
    this.player.on('exitFullWindow', e => {
      this.state = false
    })
    this.button = new Button(this.player, {
      clickHandler: e => {
        this.toggle()
      }
    })
    const controlBar = this.player.getChild('ControlBar')
    this.button.addClass('vjs-fullscreen-control')
    controlBar.removeChild('fullscreenToggle')
    controlBar.addChild(this.button)
  }

  toggle() {
    if (this.windowFullscreen) {
      this.state ? this.player.exitFullWindow() : this.player.enterFullWindow()
    } else {
      this.state ? this.player.exitFullscreen() : this.player.requestFullscreen()
    }
  }
}
