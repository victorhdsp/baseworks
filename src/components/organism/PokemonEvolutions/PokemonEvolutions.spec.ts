import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import PokemonEvolutions from './index.vue';
import { usePokedexStore } from '@/stores/pokedex';
import type { IPokemon } from '@/lib/types/pokemon';
import { createPinia, setActivePinia } from 'pinia';
import { RouterLinkStub } from '@vue/test-utils';

const global = {
    stubs: {
        RouterLink: RouterLinkStub
    }
}

describe('PokemonEvolutions.vue', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })
    
    it('renderiza o componente todo corretamente', () => {
        const evolutions: IPokemon['evolution'] = [
            { id: 1, name: 'Bulbasaur' },
            { id: 2, name: 'Ivysaur' }
        ];
        const wrapper = mount(PokemonEvolutions, {
            props: {
                evolutions
            },
            global
            
        });
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('h2').text()).toBe('Evolutions:');
        const items = wrapper.findAll('.item');
        expect(items.length).toBe(2);
        expect(items[0].text()).toContain('Bulbasaur');
        expect(items[1].text()).toContain('Ivysaur');
    });
});
