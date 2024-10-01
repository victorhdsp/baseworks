import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import PokemonTag from './index.vue';

describe('PokemonTag', () => {
  it('enviando props "fire", deve gera um componente com o valor "default"', () => {
    const wrapper = mount(PokemonTag, {
      props: { name: 'fire' }
    });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain('pokemon-tag');
    expect(wrapper.element.textContent).toBe('fire');
    expect(wrapper.attributes('style')).toBe('--color: #F08030;');
    expect(wrapper.attributes('data-size')).toBe('default');
  });

  it('enviando props "fire" e "small", deve gera um componente com o valor "small"', () => {
    const wrapper = mount(PokemonTag, {
      props: { name: 'fire', size: 'small' }
    });
    expect(wrapper.attributes('data-size')).toBe('small');
  });

  it('enviando props "fire" e "medium", deve gera um componente com o valor "medium"', () => {
    const wrapper = mount(PokemonTag, {
      props: { name: 'water' }
    });
    expect(wrapper.element.textContent).toBe('water');
    expect(wrapper.attributes('style')).toBe('--color: #6890F0;');
  });
})
