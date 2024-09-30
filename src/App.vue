<template>
  <Header />
  <RouterView v-slot="{ Component }">
    <transition>
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/organism/PageHeader/index.vue'
import { ref } from 'vue';

const localTheme = ref(localStorage.getItem('theme'));
if (!localTheme.value) {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    localTheme.value = 'dark';
  } else {
    localTheme.value = 'light';
  }
}
localStorage.setItem('theme', localTheme.value);
document.documentElement.setAttribute('data-theme', localTheme.value);

</script>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>