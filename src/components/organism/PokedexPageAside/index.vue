<template>
    <div class="pokedex-page-aside">
        <el-checkbox-group class="group" v-model="typesGroup" @change="setType">
            <el-checkbox v-for="color, key in types" :key="key" :value="key">
                <div class="item">
                    <span :style="{ '--color': color }" class="icon">*</span>
                    <p>{{ key }}</p>
                </div>
            </el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePokedexPaginationStore } from '@/stores/pokedexPagination';
import typeColors from '@/assets/data/typeColors';

const pokedex = usePokedexPaginationStore();
const typesGroup = ref<string[]>([]);
const types = typeColors;

const setType = () => {
    console.log(typesGroup.value);
    pokedex.setType(typesGroup.value);
};

</script>

<style lang="scss" scoped>
.pokedex-page-aside {
    @apply flex flex-col;
    @apply border border-blue-500 rounded-lg;
    @apply px-6 py-4;

    .group {
        @apply flex flex-col;
        @apply w-full;

        .item {
            @apply w-full;
            @apply flex items-center gap-1;
            @apply capitalize;

            .icon {
                @apply w-5 h-5;
                @apply border border-gray-300 rounded-full;
                background-color: var(--color);
            }
        }
    }
}
</style>