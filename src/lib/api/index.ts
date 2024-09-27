import config from '@/lib/config';
import { type IPokemonPreview } from '@/lib/types/pokemon.d';

export interface IGetAllOptions {
    limit: number;
    offset: number;
}

async function getAll(options: IGetAllOptions): Promise<IPokemonPreview[]> {
    const { limit, offset } = options;
    const url = `${config.POKEMON_API_URL}/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();

    return data.results.map((item: any) => {
        const id = item.url.split('/').slice(-2, -1)[0];

        return {
            id: parseInt(id),
            name: item.name,
            image: {
            gif: `${config.POKEMON_IMAGE_GIF_URL}${id}.gif`,
            png: `${config.POKEMON_IMAGE_PNG_URL}${id}.png`,
            }
        }
    });
}

const api = {
    getAll,
};

export default api;