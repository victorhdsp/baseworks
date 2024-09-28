<template>
    <section id="pokedex-list">
        <h1 v-if="pokedex.loading">Carregando...</h1>
        <ul class="list" v-else>
            <li v-for="pokemon in pokedex.items" :key="pokemon.id">
                <RouterLink :to="`/pokemon/${pokemon.id}`">
                    <h2>{{ pokemon.name }}</h2>
                    <p>{{ pokemon.id }}</p>
                    <picture>
                        <source :srcset="pokemon.image.gif" type="image/gif" />
                        <img :src="pokemon.image.png" :alt="pokemon.name" />
                    </picture>
                </RouterLink>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import { usePokedexPaginationStore } from '@/stores/pokedexPagination';
const pokedex = usePokedexPaginationStore();
</script>

<style lang="scss" scoped>
#pokedex-list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
    }
}
</style>