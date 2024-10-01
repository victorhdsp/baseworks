import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import PokemonTag from './index.vue';

describe('PokemonTag.vue', () => {
  it('deve renderizar o nome do tipo de Pokémon', () => {
    const wrapper = mount(PokemonTag, {
      props: { name: 'fire' }
    });
    expect(wrapper.text()).toContain('fire');
  });

  it('deve aplicar a cor correta baseada no tipo de Pokémon', () => {
    const wrapper = mount(PokemonTag, {
      props: { name: 'water' }
    });
    const style = wrapper.element.style;
    expect(style.getPropertyValue('--color')).toBe('#6890F0'); // Supondo que esta seja a cor para 'water'
  });

  it('deve aplicar o tamanho padrão quando não especificado', () => {
    const wrapper = mount(PokemonTag, {
      props: { name: 'grass' }
    });
    expect(wrapper.attributes('data-size')).toBe('default');
  });

  it('deve aplicar o tamanho pequeno quando especificado', () => {
    const wrapper = mount(PokemonTag, {
      props: { name: 'electric', size: 'small' }
    });
    expect(wrapper.attributes('data-size')).toBe('small');
  });
});
