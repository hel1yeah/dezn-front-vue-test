import { ref } from 'vue'

export function useAsyncFunction<T>(fn: () => Promise<T[]>) {
  const loading = ref<boolean>(false)
  const data = ref<T[] | null>(null)
  const error = ref<string | null>(null)

  const fetchData = async () => {
    loading.value = true
    try {
      data.value = await fn()
    } catch (e: any) {
      new Error(e)
      console.error(e)
      error.value = e
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return { loading, data, error, fetchData }
}
