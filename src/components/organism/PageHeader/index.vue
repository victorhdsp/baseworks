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
        </div>
    </header>
</template>

<script setup lang="ts">
import PokemonLogo from '@/components/atom/PokemonLogo/index.vue';
</script>

<style lang="scss" scoped>
.page-header {
    @apply bg-white;
    @apply mb-8;

    .content {
        @apply flex items-center justify-between;
        @apply container;
        @apply py-4;
        @apply border-b border-gray-200;

        .logo {
            @apply w-36 h-max;
        }

        .menu {
            @apply flex gap-4;

            .router-link-active {
                @apply font-bold;
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