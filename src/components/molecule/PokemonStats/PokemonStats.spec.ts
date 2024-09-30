import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import PokemonStats from './index.vue';

describe('PokemonStats.vue', () => {
  it('deve renderizar corretamente as estatísticas do Pokémon', () => {
    const stats = {
      hp: 45,
      attack: 49,
      defense: 49,
      specialAttack: 65,
      specialDefense: 65,
      speed: 45,
    };

    const wrapper = mount(PokemonStats, {
      props: { stats },
    });

    expect(wrapper.text()).toContain('HP: 45');
    expect(wrapper.text()).toContain('Attack: 49');
    expect(wrapper.text()).toContain('Defense: 49');
    expect(wrapper.text()).toContain('Special Attack: 65');
    expect(wrapper.text()).toContain('Special Defense: 65');
    expect(wrapper.text()).toContain('Speed: 45');
  });

  it('deve renderizar corretamente quando as estatísticas são zero', () => {
    const stats = {
      hp: 0,
      attack: 0,
      defense: 0,
      specialAttack: 0,
      specialDefense: 0,
      speed: 0,
    };

    const wrapper = mount(PokemonStats, {
      props: { stats },
    });

    expect(wrapper.text()).toContain('HP: 0');
    expect(wrapper.text()).toContain('Attack: 0');
    expect(wrapper.text()).toContain('Defense: 0');
    expect(wrapper.text()).toContain('Special Attack: 0');
    expect(wrapper.text()).toContain('Special Defense: 0');
    expect(wrapper.text()).toContain('Speed: 0');
  });

  it('deve renderizar corretamente com valores altos de estatísticas', () => {
    const stats = {
      hp: 100,
      attack: 150,
      defense: 200,
      specialAttack: 250,
      specialDefense: 300,
      speed: 350,
    };

    const wrapper = mount(PokemonStats, {
      props: { stats },
    });

    expect(wrapper.text()).toContain('HP: 100');
    expect(wrapper.text()).toContain('Attack: 150');
    expect(wrapper.text()).toContain('Defense: 200');
    expect(wrapper.text()).toContain('Special Attack: 250');
    expect(wrapper.text()).toContain('Special Defense: 300');
    expect(wrapper.text()).toContain('Speed: 350');
  });
});
