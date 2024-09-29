<template>
    <Card class="pokedex-page-aside">
        <el-collapse v-model="activeGroup">
            <el-collapse-item class="title" title="Filtros por tipo:" name="1">
                <el-checkbox-group class="group" v-model="typesGroup" @change="setType">
                    <el-checkbox v-for="_, type in types" :key="type" :value="type">
                        <PokemonTag size="small" :name="type" />
                    </el-checkbox>
                </el-checkbox-group>
            </el-collapse-item>
        </el-collapse>
    </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePokedexPaginationStore } from '@/stores/pokedexPagination';
import Card from '@/components/atom/Card/index.vue';
import PokemonTag from '@/components/molecule/PokemonTag/index.vue';
import typeColors from '@/assets/data/typeColors';

const pokedex = usePokedexPaginationStore();
const types = typeColors;

const activeGroup = ref<string[]>(['1']);
const typesGroup = ref<string[]>([]);
const setType = () => pokedex.setType(typesGroup.value);

</script>

<style lang="scss" scoped>
.pokedex-page-aside {
    --el-border-color-lighter: transparent;
    @apply flex flex-col;
    @apply border border-blue-500 rounded-lg;
    @apply px-4 py-1;
    @apply h-max;

    .title {
        .el-collapse-item__header.is-active {
            @apply text-lg font-bold;
        }
    }

    .group {
        @apply flex flex-col;
        @apply w-full;
    }
}

@media screen and (max-width: 768px) {}
</style>