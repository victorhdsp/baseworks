<template>
    <picture class="pokemon-image">
        <source ref="source" :srcset="png" type="image/png" />
        <img @error="handleError" :src="placeholder" :alt="props.alt" />
    </picture>
</template>

<script setup lang="ts">
import config from '@/lib/config';
import { computed, ref, type VNodeRef } from 'vue';
const props = defineProps<{
    alt: string;
    index: string | number;
}>();

const source = ref<VNodeRef | undefined>();
const png = computed(() => `${config.POKEMON_IMAGE_PNG_URL}${props.index}.png`);
const placeholder = computed(() => `/img/placeholder-pokemon.webp`);

const handleError = (event: Event) => {
    if (source.value) {
        (source.value as unknown as HTMLSourceElement).remove();
    }
};
</script>

<style lang="scss" scoped>
.pokemon-image {
    @apply w-full h-full;
    @apply aspect-square;
    @apply flex items-center justify-center;

    img {
        @apply h-full;
    }
}
</style>