<script setup lang="ts">
import {ref, computed} from "vue"
const isAnimationsEnabled = ref<boolean>(false)

const onToggleAnimation = () => {
  isAnimationsEnabled.value = !isAnimationsEnabled.value
}

const typeOnAnimation = computed(() => isAnimationsEnabled.value ? 'spin' : null)

</script>

<template>
  <div class="user-avatar">
    <img class="user-avatar__img" src="@img/user.jpg" />
    <RouterLink to="/setting" class="user-avatar__link">
      <v-icon name="fc-settings" scale="1.5" :animation="typeOnAnimation"
      @mouseenter="onToggleAnimation"
      @mouseleave="onToggleAnimation"/>
    </RouterLink />
  </div>
</template>

<style scoped lang="scss">
.user-avatar {
  position: relative;
}
.user-avatar__img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.user-avatar__link {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: vars.$white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
