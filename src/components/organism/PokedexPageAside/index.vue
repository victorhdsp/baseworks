<template>
    <div class="pokedex-page-aside">
        <el-checkbox-group v-model="typesGroup" @change="setType" size="small">
            <el-checkbox-button v-for="type in types" :key="type" :value="type">
                {{ type }}
            </el-checkbox-button>
        </el-checkbox-group>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePokedexPaginationStore } from '@/stores/pokedexPagination';
import typeColors from '@/assets/data/typeColors';

const pokedex = usePokedexPaginationStore();
const typesGroup = ref<string[]>([]);
const types = Object.keys(typeColors);

const setType = () => {
    console.log(typesGroup.value);
    pokedex.setType(typesGroup.value);
};

</script>

<style lang="scss" scoped>
.pokedex-page-aside {}
</style>