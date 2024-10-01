import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { RouterLinkStub } from '@vue/test-utils';
import PokemonCard from './index.vue';
import { createPinia, setActivePinia } from 'pinia';

const global = {
  stubs: {
    RouterLink: RouterLinkStub
  }
}

describe('PokedexPageSearch', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Renderiza as informações do pokemon', () => {
    const pokemon = { id: 1, name: 'Bulbasaur', favorite: false }
    const wrapper = mount(PokemonCard, {
      props: { pokemon }, global
    });

    expect(wrapper.find(".pokemon-image").exists()).toBe(true);
    expect(wrapper.find('.title').text()).toBe('Bulbasaur');
    expect(wrapper.find(".favorite").exists()).toBe(true);
  });

  it('Verifica se o URL foi renderizado corretamente', () => {
    const pokemon = { id: 25, name: 'Pikachu', favorite: false };
    const wrapper = mount(PokemonCard, {
      props: { pokemon },
      global
    });
  
    const link = wrapper.findComponent(RouterLinkStub);
    expect(link.props().to).toBe('/pokemon/25');
  });
})
