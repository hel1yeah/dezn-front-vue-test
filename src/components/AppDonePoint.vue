<script setup lang="ts">
const { active } = defineProps<{ active: boolean }>()
</script>

<template>
  <div :class="['done-point', { active }]"></div>
</template>

<style scoped lang="scss">
.done-point {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #373737;

  &.active {
    background-color: vars.$color-primary;
  }
}
</style>
