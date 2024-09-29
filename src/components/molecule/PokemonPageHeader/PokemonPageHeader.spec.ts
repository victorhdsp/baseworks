import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import PokedexPageSearch from './index.vue';

const props = {
  name: 'Pikachu',
  index: 25,
};

describe('PokedexPageSearch', () => {
  it('renderizando "as props" do elemento.', async () => {
    const wrapper = mount(PokedexPageSearch, { props });
    expect(wrapper.text()).toContain('Pikachu');
    expect(wrapper.text()).toContain('25');
  });
})
