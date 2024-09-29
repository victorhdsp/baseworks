<template>
    <div class="pokemon-card">
        <RouterLink class="content" :to="`/pokemon/${pokemon.id}`">
            <div class="img">
                <PokemonImage :index="pokemon.id" :alt="pokemon.name" />
            </div>
            <h2 class="title">{{ pokemon.name }}</h2>
            <PokemonNumber :index="pokemon.id" />
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
import PokemonImage from '@/components/molecule/PokemonImage/index.vue';
import type { IPokemonPreview } from '@/lib/types/pokemon';
import PokemonNumber from '@/components/atom/PokemonNumber/index.vue';
import { RouterLink } from 'vue-router';
defineProps<{ pokemon: IPokemonPreview }>();
</script>

<style lang="scss" scoped>
.pokemon-card {
    @apply w-full h-full;

    .content {
        @apply grid grid-cols-1;
        grid-template-rows: 1fr max-content max-content;
        @apply relative;
        @apply h-full;

        .title {
            @apply text-lg;
        }

        .number {
            @apply text-sm;
        }

        .img {
            @apply w-full;
            @apply max-h-32;
            @apply pb-2;
            @apply aspect-square
        }
    }
}
</style>