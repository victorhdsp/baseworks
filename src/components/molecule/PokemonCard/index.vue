<template>
    <div class="pokemon-card">
        <div class="content">
            <RouterLink class="img" :to="`/pokemon/${pokemon.id}`">
                <PokemonImage width="136" height="136" :index="pokemon.id" :alt="pokemon.name" />
            </RouterLink>
            <div class="header">
                <RouterLink class="title" :to="`/pokemon/${pokemon.id}`">
                    <h2>{{ pokemon.name }}</h2>
                </RouterLink>
                <button class="favorite" @click="toggleFavorite">
                    {{ pokemon.favorite ? '❤️' : '🤍' }}
                </button>
            </div>
            <PokemonNumber :index="pokemon.id" />
        </div>
    </div>
</template>

<script setup lang="ts">
import PokemonImage from '@/components/molecule/PokemonImage/index.vue';
import type { IPokemonPreview } from '@/lib/types/pokemon';
import PokemonNumber from '@/components/atom/PokemonNumber/index.vue';
import { RouterLink } from 'vue-router';
import { usePokedexStore } from '@/stores/pokedex';

const props = defineProps<{ pokemon: IPokemonPreview }>();
const pokedex = usePokedexStore();

const toggleFavorite = () => {
    pokedex.toggleFavoriteById(props.pokemon.id);
};
</script>

<style lang="scss" scoped>
.pokemon-card {
    @apply w-full h-full;

    .content {
        @apply grid grid-cols-1;
        grid-template-rows: 1fr max-content max-content;
        @apply relative;
        @apply h-full;

        .img {
            @apply w-full;
            @apply max-h-36;
            @apply pb-2;
            @apply aspect-square
        }

        .header {
            @apply flex justify-between items-center;

            .title {
                @apply overflow-hidden;
                @apply w-full;

                h2 {
                    @apply text-lg whitespace-nowrap text-ellipsis text-[var(--text-dk-color)];
                    @apply overflow-hidden;
                    @apply w-full;
                }
            }
        }

        .number {
            @apply text-sm;
        }
    }
}
</style>