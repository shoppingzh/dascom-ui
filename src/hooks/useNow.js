import { ref, computed } from '@vue/composition-api'
import { now } from '../utils/datetime'

export default function() {
  const datetime = ref(now())

  const startTimer = () => {
    setTimeout(() => {
      datetime.value = now()
      startTimer()
    }, 1000)
  }

  startTimer()

  const datetimeDesc = computed(() => datetime.value.toLocaleString())

  return {
    datetime,
    datetimeDesc
  }
}
