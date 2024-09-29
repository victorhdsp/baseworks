<template>
    <div class="pokemon-tag" :data-size="size" :style="{ '--color': color }">
        <p>{{ props.name }}</p>
    </div>
</template>

<script setup lang="ts">
import typeColors from '@/assets/data/typeColors';
import type { PokemonTypeNames } from '@/lib/types/pokemon';

const props = defineProps<{
    name: PokemonTypeNames,
    size?: "small" | "default"
}>();

const color = typeColors[props.name] || '#000';
const size = props.size || 'default';
</script>

<style lang="scss" scoped>
.pokemon-tag {
    @apply rounded-full text-white capitalize;
    background-color: var(--color);

    &[data-size='small'] {
        @apply px-2 py-1;
        @apply text-sm;
    }

    &[data-size='default'] {
        @apply px-3 py-2;
        @apply w-max;
        @apply text-sm;
    }
}
</style>