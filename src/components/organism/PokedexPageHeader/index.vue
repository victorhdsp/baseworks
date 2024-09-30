<template>
    <div class="pokedex-page-header">
        <el-input v-model="search" @input="onSearch" style="width: 240px" size="large"
            placeholder="Digite um texto para pesquisar" />
    </div>
</template>

<script setup lang="ts">
import { ElInput } from 'element-plus';
import { ref } from 'vue';
import { usePokedexPaginationStore } from '@/stores/pokedexPagination/index';

const pokedex = usePokedexPaginationStore();
const search = ref('');

const onSearch = () => {
    pokedex.setSearch(search.value);
};
</script>

<style lang="scss" scoped>
.pokedex-page-header {
    @apply py-3;
    @apply container;
    @apply flex items-center justify-between;
    @apply border-b border-gray-200;
}
</style>