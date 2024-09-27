import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { usePokedexStore } from '@/stores/pokedex';

import { mount } from '@vue/test-utils';
import PokedexList from './PokedexList.vue';

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
    const store = usePokedexStore();
    await store.setItems();
    expect(wrapper.findAll('#pokedex .list li').length).toBe(store.items.length);
  })

  it('renderizando "nome", "numero" e "imagem"', async () => {
    const wrapper = mount(PokedexList);
    const store = usePokedexStore();
    await store.setItems();
    const firstItem = store.items[0];
    expect(wrapper.text()).toContain(firstItem.name);
    expect(wrapper.text()).toContain(firstItem.id);
    expect(wrapper.find('img').attributes('src')).toBe(firstItem.image.png);
    expect(wrapper.find('picture').find('source').attributes('srcset')).toBe(firstItem.image.gif);
  })
})
