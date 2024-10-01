import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import PokemonNumber from './index.vue';

describe('PokemonNumber', () => {
  it('passando "1" como props, deve retornar #00001', () => {
    const wrapper = mount(PokemonNumber, {
      props: { index: 1 }
    });
    expect(wrapper.text()).toBe('#00001');
  });
})
