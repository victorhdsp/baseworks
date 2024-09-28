<template>
    <picture class="pokemon-image">
        <source :srcset="gif" type="image/gif" />
        <source :srcset="png" type="image/png" />
        <img :src="commom" :alt="props.alt" />
    </picture>
</template>

<script setup lang="ts">
import config from '@/lib/config';
const props = defineProps<{
    alt: string;
    index: string;
}>();

const gif = `${config.POKEMON_IMAGE_GIF_URL}${props.index}.gif`;
const png = `${config.POKEMON_IMAGE_PNG_URL}${props.index}.png`;
const commom = `${config.POKEMON_IMAGE_COMMON_URL}${props.index}.png`;
</script>

<style lang="scss" scoped>
.pokemon-image {}
</style>