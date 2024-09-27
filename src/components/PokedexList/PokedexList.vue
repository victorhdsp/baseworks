<template>
    <section>
        <h1 v-if="pokedex.loading">Carregando...</h1>
        <ul v-else>
            <li v-for="pokemon in pokedex.items" :key="pokemon.id">
                <h2>{{ pokemon.name }}</h2>
                <p>{{ pokemon.id }}</p>
                <picture>
                    <source :srcset="pokemon.image.gif" type="image/gif" />
                    <img :src="pokemon.image.png" :alt="pokemon.name" />
                </picture>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import { usePokedexStore } from '@/stores/pokedex';
const pokedex = usePokedexStore();
</script>