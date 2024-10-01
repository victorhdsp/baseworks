import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import PokemonImage from './index.vue';
import config from '@/lib/config';

describe('PokemonImage', () => {
  it('deve renderizar a imagem com o src e source correto', () => {
    const wrapper = mount(PokemonImage, {
      props: {
        alt: 'Imagem do Pokemon',
        index: 1,
        width: "136",
        height: "136"
      }
    });
    const source = wrapper.find('source');
    expect(source.attributes('srcset')).toBe(`${config.POKEMON_IMAGE_PNG_URL}1.png`);
    const img = wrapper.find('img');
    expect(img.attributes('src')).toBe('/img/placeholder-pokemon.webp');
  });

  it('deve remover o source ao ocorrer um erro na imagem', async () => {
    const wrapper = mount(PokemonImage, {
      props: {
        alt: 'Imagem do Pokemon',
        index: 1,
        width: "136",
        height: "136"
      }
    });
    const img = wrapper.find('img');
    await img.trigger('error');
    const source = wrapper.find('source');
    expect(source.exists()).toBe(false);
  });

  it('deve definir o atributo alt corretamente', () => {
    const wrapper = mount(PokemonImage, {
      props: {
        alt: 'Imagem do Pokemon',
        index: 1,
        width: "136",
        height: "136"
      }
    });
    const img = wrapper.find('img');
    expect(img.attributes('alt')).toBe('Imagem do Pokemon');
  });
});
