import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { usePokedexPaginationStore } from '@/stores/pokedexPagination';

import { mount } from '@vue/test-utils';
import PokedexList from './index.vue';

describe('PokedexList', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renderizando "loading" antes dos dados chegarem.', () => {
    const wrapper = mount(PokedexList);
    expect(wrapper.text()).toContain('Carregando...')
  })

  it('renderizando quantidade de itens corretas.', async () => {
    const wrapper = mount(PokedexList);
    const pokedex = usePokedexPaginationStore();
    await pokedex.populate(1);
    expect(wrapper.findAll('#pokedex-list .list li').length).toBe(Object.keys(pokedex.pokemons).length);
  })

  it('renderizando "nome", "numero" e "imagem"', async () => {
    const wrapper = mount(PokedexList);
    const pokedex = usePokedexPaginationStore();
    await pokedex.populate(1);
    const firstItem = pokedex.pokemons[0];
    console.log(firstItem);
    expect(wrapper.text()).toContain(firstItem.name);
    expect(wrapper.text()).toContain(firstItem.id);
    expect(wrapper.find('img').attributes('src')).includes(firstItem.id);
    expect(wrapper.find('picture').find('source').attributes('srcset')).includes(firstItem.id);
  })
})
