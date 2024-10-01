import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import PokemonTypes from './index.vue';
import PokemonTag from '@/components/molecule/PokemonTag/index.vue';
import type { PokemonTypeNames } from '@/lib/types/pokemon';

describe('PokemonTypes.vue', () => {
  it('deve renderizar o componente corretamente', () => {
    const wrapper = mount(PokemonTypes, {
      props: {
        types: ['fire', 'water']
      }
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('deve exibir o título "Types:"', () => {
    const wrapper = mount(PokemonTypes, {
      props: {
        types: ['fire', 'water']
      }
    });
    expect(wrapper.find('h3').text()).toBe('Types:');
  });

  it('deve renderizar o componente PokemonTag para cada tipo', () => {
    const types:PokemonTypeNames[] = ['fire', 'water'];
    const wrapper = mount(PokemonTypes, {
      props: {
        types
      }
    });
    const pokemonTags = wrapper.findAllComponents(PokemonTag);
    expect(pokemonTags.length).toBe(types.length);
    types.forEach((type, index) => {
      expect(pokemonTags[index].props('name')).toBe(type);
    });
  });

  it('deve aplicar classes CSS corretamente', () => {
    const wrapper = mount(PokemonTypes, {
      props: {
        types: ['fire', 'water']
      }
    });
    expect(wrapper.classes()).toContain('pokemon-types');
  });
});
