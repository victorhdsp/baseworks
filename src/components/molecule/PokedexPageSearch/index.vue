<template>
    <Card class="pokedex-page-search">
        <Search />
        <el-input v-model="search" @input="onSearch" placeholder="Digite um texto para pesquisar"
            :input-style="{ border: 'none' }" />
        <el-button type="primary" @click="onSearch">
            Pesquisar
        </el-button>
    </Card>
</template>

<script setup lang="ts">
import Card from '@/components/atom/Card/index.vue';
import { Search } from 'lucide-vue-next';
import { ElInput } from 'element-plus';
import { usePokedexPaginationStore } from '@/stores/pokedexPagination';
import { ref } from 'vue';

const pokedex = usePokedexPaginationStore();
const search = ref<string>('');
const onSearch = () => pokedex.setSearch(search.value);
</script>

<style lang="scss" scoped>
.pokedex-page-search {
    --el-input-border: transparent;
    --el-border-color: transparent;
    --el-input-hover-border-color: transparent;
    @apply py-2 px-4;
    @apply flex gap-3 items-center;
}
</style>