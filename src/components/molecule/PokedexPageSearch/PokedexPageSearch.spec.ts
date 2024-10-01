import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import PokedexPageSearch from './index.vue';
import { ElInput, ElButton, ElSwitch } from 'element-plus';
import { createPinia, setActivePinia } from 'pinia';



describe('PokedexPageSearch', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renderizando os elementos "search" e "favoritos".', () => {
    const wrapper = mount(PokedexPageSearch);

    expect(wrapper.findComponent(ElInput).exists()).toBe(true);
    expect(wrapper.findComponent(ElButton).exists()).toBe(true);
    expect(wrapper.findComponent(ElSwitch).exists()).toBe(true);
  });

  it('verificando se o "search" está funcionando.', async () => {
    const wrapper = mount(PokedexPageSearch);
    const input = wrapper.findComponent(ElInput);
    await input.setValue('bulbasaur');
    expect(input.vm.modelValue).toBe('bulbasaur');
  });

  it('verificando se o "favoritos" está funcionando.', async () => {
    const wrapper = mount(PokedexPageSearch);
    const switchComponent = wrapper.findComponent(ElSwitch);
    expect(switchComponent.vm.modelValue).toBe(false);
    await switchComponent.trigger('click');
    expect(switchComponent.vm.modelValue).toBe(true);
  });
})
