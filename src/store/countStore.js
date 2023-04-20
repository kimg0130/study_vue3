import {defineStore} from "pinia";
import {computed, ref} from "vue";
export const useCounterStore = defineStore('count', () => {
  const count = ref(0)
  const name = ref('jiyeon')
  const doubleCount = computed(() => count.value * 2)
  const increment = () => {
    count.value++
    console.log('increment call',count.value)
  }

  return { count, name, doubleCount, increment }
})
