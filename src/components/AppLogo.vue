<script setup lang="ts"></script>

<template>
  <div class="app-logo">
    <img class="app-logo__img" src="@img/leaves.png" alt="logo" />
    <span class="app-logo__text">INVENTORY</span>
  </div>
</template>

<style scoped lang="scss">
.app-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}
.app-logo__img {
  width: 50px;
  height: 50px;
}
.app-logo__text {
  font-size: 24px;
  font-weight: 700;
  color: vars.$color-primary;
}
</style>
