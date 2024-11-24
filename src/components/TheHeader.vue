<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue'
import AppInput from '@/components/AppInput.vue'
import TheTime from '@/components/TheTime.vue'

const inputType = 'text'
const inputPlaceholder = 'Search'
</script>

<template>
  <header class="header-container">
    <app-logo />
    <app-input class="input" :placeholder="inputPlaceholder" :type="inputType" />
    <the-time />
  </header>
</template>

<style scoped lang="scss">
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background-color: vars.$color-tertiary;
  gap: 20px;

  .input {
    max-width: 300px;
    margin: 0 auto 0 0;
  }
}
</style>
