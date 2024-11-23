<script setup lang="ts">
import TheUserAvatar from '@/components/TheUserAvatar.vue'
import { RouterLink } from 'vue-router'

const RouterLinks: { name: string; path: string }[] = [
  {
    name: 'Income',
    path: '/in-come',
  },
  {
    name: 'Groups',
    path: '/groups',
  },
  {
    name: 'Products',
    path: '/products',
  },
  {
    name: 'Users',
    path: '/users',
  },
  {
    name: 'Settings',
    path: '/settings',
  },
]
</script>

<template>
  <aside class="aside">
    <the-user-avatar />
    <nav class="nav">
      <ul class="nav__list">
        <RouterLink :to="link.path" v-for="link in RouterLinks" class="nav__list-item">
          {{ link.name }}
        </RouterLink>
      </ul>
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
.aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
}

.nav {
  width: 100%;
  margin: 30px auto;
}
.nav__list {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
}

.nav__list-item {
  font-size: 22px;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  transition: color vars.$transition;
  padding: 3px;
  margin: 3px;

  &:hover {
    color: vars.$color-primary;
  }

  &.router-link-active {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: vars.$color-primary;
    }
  }
}
</style>
