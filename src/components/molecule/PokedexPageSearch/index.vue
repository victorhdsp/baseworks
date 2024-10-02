<template>
    <Card class="pokedex-page-search">
        <div class="search">
            <Search />
            <el-input v-model="search" @input="onSearch" placeholder="Digite um texto para pesquisar"
                :input-style="{ border: 'none' }" />
            <el-button class="button" type="primary" @click="onSearch">
                Pesquisar
            </el-button>
        </div>
        <label class="favorites">
            <el-switch v-model="favorite" @change="onFavorite" />
            <p>Favoritos</p>
        </label>
    </Card>
</template>

<script setup lang="ts">
import Card from '@/components/atom/Card/index.vue';
import { Search } from 'lucide-vue-next';
import { ElInput, ElButton, ElSwitch } from 'element-plus';
import { usePokedexPaginationStore } from '@/stores/pokedexPagination';
import { ref } from 'vue';

const pokedex = usePokedexPaginationStore();
const search = ref<string>('');
const onSearch = () => pokedex.setSearch(search.value);
const favorite = ref<boolean>(false);
const onFavorite = () => pokedex.setFavorites(favorite.value);
</script>

<style lang="scss" scoped>
.pokedex-page-search {
    @apply py-2 px-4;
    @apply flex items-center gap-4;

    .search {
        --el-input-border: transparent;
        --el-border-color: transparent;
        --el-input-hover-border-color: transparent;
        @apply flex gap-3 items-center;
        @apply w-full;
    }

    .favorites {
        @apply flex gap-2 items-center;
    }
}

@media screen and (max-width: 768px) {
    .pokedex-page-search .search .button {
        @apply hidden;
    }
}
</style>