<script setup lang="ts"></script>
<template>
  <div class="table-wrapper">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.table-wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: auto;
  padding: 0 0 30px 0;
  margin-top: 30px;
}
</style>
