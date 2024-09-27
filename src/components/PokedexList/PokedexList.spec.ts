import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import PokedexList from './PokedexList.vue';

describe('PokedexList', () => {
  it('renderizando quantidade de itens corretas.', () => {
    const wrapper = mount(PokedexList)
    expect(wrapper.text()).toContain('Pokedex')
  })
})
