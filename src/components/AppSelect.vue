<script setup lang="ts">
import { ref } from 'vue'
const { options } = defineProps<{ options: string[] }>()

const emit = defineEmits<{
  'update:type': [type: string]
}>()

const selected = ref<string | null>('null')

function onSetOption(e: Event) {
  const target = e.target as HTMLSelectElement
  emit('update:type', target.value)
}
</script>
<template>
  <div class="app-select">
    <select v-model="selected" @change="onSetOption" name="select">
      <option disabled value="null">Please select one</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="scss"></style>
