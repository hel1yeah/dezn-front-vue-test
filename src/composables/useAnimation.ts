// useAnimation.ts
import { ref, computed } from 'vue'

export function useAnimation() {
  const isAnimationsEnabled = ref<boolean>(false)

  const onToggleAnimation = () => {
    isAnimationsEnabled.value = !isAnimationsEnabled.value
  }

  const typeOnAnimation = computed(() => (isAnimationsEnabled.value ? 'spin' : null))

  return {
    isAnimationsEnabled,
    onToggleAnimation,
    typeOnAnimation,
  }
}
