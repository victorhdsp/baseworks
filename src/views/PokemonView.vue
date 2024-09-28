<template>
    <PokemonPageHeader name="Articuno" :index="2" />
    <main>
        <div v-if="!pokemon">
            Carregando...
        </div>
        <section v-else id="pokemon-view">
            <PokemonImage :index="pokemon.id" :alt="pokemon.name" />
            <div class="pokemon-caracteristics"></div>
            <div class="pokemon-abilities"></div>
            <div class="pokemon-stats"></div>
            <div class="pokemon-types"></div>
            <div class="pokemon-weakness"></div>
            <div class="pokemon-description"></div>
            <div class="pokemon-evolutions"></div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { IPokemon } from '@/lib/types/api';
import PokemonPageHeader from '@/components/organism/PokemonPageHeader/index.vue';
import PokemonImage from '@/components/atom/PokemonImage/index.vue';
import api from '@/lib/api';

const pokemon = ref<IPokemon | null>(null);

onMounted(async () => {
    const data = await api.getUnique('1');
    pokemon.value = data;
});
</script>

<style lang="scss" scoped>
#pokemon-view {
    @apply grid grid-cols-2 gap-4;
    grid-template-rows: repeat(4, minmax(0, 1fr));

    .pokemon-types,
    .pokemon-weakness,
    .pokemon-description,
    .pokemon-evolutions {
        @apply col-start-2;
    }
}
</style>