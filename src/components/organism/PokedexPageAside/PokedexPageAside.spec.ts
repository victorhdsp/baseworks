import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import PokedexPageAside from './index.vue';
import { usePokedexPaginationStore } from '@/stores/pokedexPagination/index';
import typeColors from '@/assets/data/typeColors';
import { createPinia, setActivePinia } from 'pinia';

describe('PokedexPageAside', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('deve renderizar o componente corretamente', () => {
    const wrapper = mount(PokedexPageAside);
    expect(wrapper.exists()).toBe(true);
  });

  it('deve exibir o título "Filtros por tipo:"', () => {
    const wrapper = mount(PokedexPageAside);
    const title = wrapper.find('.title .el-collapse-item__header');
    expect(title.text()).toBe('Filtros por tipo:');
  });

  it('deve renderizar os checkboxes de tipos corretamente', () => {
    const wrapper = mount(PokedexPageAside);
    const checkboxes = wrapper.findAll('.group .el-checkbox');
    expect(checkboxes.length).toBe(Object.keys(typeColors).length);
  });
});
