<template>
    <picture class="pokemon-image">
        <source :srcset="gif" type="image/gif" />
        <source :srcset="png" type="image/png" />
        <img @error="handleError" :src="commom" :alt="props.alt" />
    </picture>
</template>

<script setup lang="ts">
import config from '@/lib/config';
import { ref } from 'vue';
const props = defineProps<{
    alt: string;
    index: string | number;
}>();

const gif = ref(`${config.POKEMON_IMAGE_GIF_URL}${props.index}.gif`);
const png = ref(`${config.POKEMON_IMAGE_PNG_URL}${props.index}.png`);
const commom = ref(`${config.POKEMON_IMAGE_COMMON_URL}${props.index}.png`);

const handleError = (event: Event) => {
    gif.value = '';
    console.log('Error loading image');
};
</script>

<style lang="scss" scoped>
.pokemon-image {
    @apply w-max h-max;

    img {
        @apply w-full h-full;
        @apply object-contain object-center;
    }
}
</style>