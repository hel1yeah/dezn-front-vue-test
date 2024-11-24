<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import TheSidebar from '@/components/TheSidebar.vue'
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <div class="container">
    <the-sidebar class="sidebar" />

    <the-header class="header" />

    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: vars.$sidebar-width 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header header'
    'sidebar content';
  height: 100vh;
  max-width: vars.$container-normal;
  margin: 0 auto;
  position: relative;
}

.sidebar {
  grid-area: sidebar;
  background-color: vars.$sidebar-color;
  padding: 40px 20px;
  border-right: 1px solid #ddd;
  position: relative;
  z-index: 5;

  -webkit-box-shadow: 5px 0px 25px -12px rgba(0, 0, 0, 0.77);
  -moz-box-shadow: 5px 0px 25px -12px rgba(0, 0, 0, 0.77);
  box-shadow: 5px 0px 25px -12px rgba(0, 0, 0, 0.77);
}

.header {
  z-index: 10;
  height: 80px;
  grid-area: header;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 20px 0 vars.$sidebar-width;

  -webkit-box-shadow: 0px 5px 25px -12px rgba(0, 0, 0, 0.77);
  -moz-box-shadow: 0px 5px 25px -12px rgba(0, 0, 0, 0.77);
  box-shadow: 0px 5px 25px -12px rgba(0, 0, 0, 0.77);
}

.content {
  grid-area: content;
  background-color: vars.$content-bg-color;
  padding: 80px 20px 20px 90px;
  overflow-y: auto;
}
</style>
