<template>
    <header class="page-header">
        <div class="content">
            <RouterLink to="/">
                <PokemonLogo class="logo" />
            </RouterLink>

            <menu class="menu">
                <RouterLink to="/">Pokedex</RouterLink>
                <RouterLink to="/sobre">Sobre</RouterLink>
            </menu>
            <el-switch v-model="theme" inline-prompt
                style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" active-text="Light"
                inactive-text="Dark" @change="toggleTheme" />
        </div>
    </header>
</template>

<script setup lang="ts">
import PokemonLogo from '@/components/atom/PokemonLogo/index.vue';
import { RouterLink } from 'vue-router';
import { ElSwitch } from 'element-plus';
import { ref } from 'vue';

const theme = ref(localStorage.getItem('theme') === 'light');

const toggleTheme = (isLight: boolean | string | number) => {
    const theme = isLight ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
};
</script>

<style lang="scss" scoped>
.page-header {
    @apply bg-[--bg-color];
    @apply mb-8;

    .content {
        @apply flex items-center justify-between gap-8;
        @apply container;
        @apply py-4;
        @apply border-b border-gray-200;

        .logo {
            @apply w-36 h-max;
        }

        .menu {
            @apply flex gap-4;

            a {
                @apply text-[--text-dk-color];
                @apply relative;

                &::after {
                    content: '';
                    @apply absolute bottom-0 left-0;
                    @apply w-[0px] h-[1px];
                    @apply bg-blue-500;
                    @apply transition-all duration-300;
                }

                &.router-link-active {
                    &::after {
                        @apply w-full;
                    }
                }
            }

        }

    }
}

@media screen and (max-width: 768px) {
    .page-header {
        .content {
            @apply justify-center;

            .logo {
                @apply w-24;
            }

            .menu {
                @apply hidden;
            }
        }
    }

}
</style>