import { mount } from '@vue/test-utils';
import PageHeader from './index.vue';
import { RouterLinkStub } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { ElSwitch } from 'element-plus';

const _global = {
    stubs: {
        RouterLink: RouterLinkStub
    }
}

describe('PageHeader', () => {
    it('renderiza o header', () => {
        const wrapper = mount(PageHeader, { global: _global });
        expect(wrapper.find('.logo').exists()).toBe(true);
        
        const links = wrapper.findAll('.menu a');
        expect(links.length).toBe(2);
        expect(links[0].text()).toBe('Pokedex');
        expect(links[1].text()).toBe('Sobre');

        const switchElement = wrapper.findComponent(ElSwitch);
        expect(switchElement.exists()).toBe(true);
    });

    it('deve alternar o tema quando o switch é clicado', async () => {
        const wrapper = mount(PageHeader, { global: _global });
        const switchElement = wrapper.findComponent(ElSwitch);
        expect(switchElement.exists()).toBe(true);

        await switchElement.trigger('click');
        expect(localStorage.getItem('theme')).toBe('light');

        await switchElement.trigger('click');
        expect(localStorage.getItem('theme')).toBe('dark');
    });
});
