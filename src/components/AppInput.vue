<script setup lang="ts">
import type { InputTypes } from '@/types/props'
interface Props {
  type: InputTypes
  placeholder: string
  label?: string | null
}

const {
  type = 'text',
  placeholder = 'Enter text',
  label = undefined,
} = defineProps<Props>()
</script>

<template>
  <label class="label">
    <span class="label__text" v-if="label">{{ label }}</span>
    <input
      class="label__input"
      :type="type"
      :placeholder="placeholder"
      name="input"
    />
  </label>
</template>

<style scoped lang="scss">
.label {
  display: flex;
  flex-direction: column;
  gap: 5px;
  &__text {
    font-weight: 700;
  }
  &__input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid vars.$color-primary;
    background-color: vars.$input-bg-color;
  }
}
</style>
