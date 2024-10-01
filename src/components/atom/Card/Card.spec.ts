import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Card from './index.vue';

describe('Card', () => {
  it('renderizando o elemento com o "is" em "default"', () => {
    const wrapper = mount(Card);
    expect(wrapper.element.tagName).toBe('DIV');
  });

  it('renderizando o elemento com o "is" em "section"', () => {
    const wrapper = mount(Card, {
      props: { is: 'section' }
    });
    expect(wrapper.element.tagName).toBe('SECTION');
  });

  it('renderizando as classes que tem no elemento"', () => {
    const wrapper = mount(Card);
    expect(wrapper.classes()).toContain('card');
  });

  it('renderizando o conteúdo no slot', () => {
    const wrapper = mount(Card, {
      slots: {
        default: 'Conteúdo do card'
      }
    });
    expect(wrapper.text()).toBe('Conteúdo do card');
  });
})
