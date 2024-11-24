<script setup lang="ts">
import { onUnmounted } from 'vue'
import { useTime } from '@/composables/useTime'

const { currentDayName, currentDate, currentTime, startTimer, clearTimer } = useTime()

startTimer()
onUnmounted(() => clearTimer())
</script>

<template>
  <div class="time-wrapper">
    <div class="day">
      <span>{{ currentDayName }}</span>
      <span>{{ currentDate }}</span>
    </div>
    <div class="time">
      <v-icon name="wi-time-3" scale="1" fill="#47b900" />
      <span>{{ currentTime }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.time-wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 10px;
}
.day {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.time {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
}
</style>
