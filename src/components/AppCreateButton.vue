<script setup lang="ts">
import { useAnimation } from '@/composables/useAnimation'
const { typeOnAnimation, onToggleAnimation } = useAnimation()
</script>

<template>
  <div class="circle-wrapper">
    <div class="circle">
      <v-icon
        name="fc-plus"
        scale="1.5"
        fill="white"
        :animation="typeOnAnimation"
        @mouseenter="onToggleAnimation"
        @mouseleave="onToggleAnimation"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.circle-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: vars.$color-dark-primary;
  cursor: pointer;

  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: vars.$color-primary;
  }
}
</style>
