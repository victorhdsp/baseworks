import config from '@/lib/config';
import { type IPokemonPreview } from '@/lib/types/pokemon.d';

function parseResults(results: any): IPokemonPreview[] {
    return results.map((item: any) => {
        const id = item.url.split('/').slice(-2, -1)[0];

        return {
            id: parseInt(id),
            name: item.name,
            image: {
                gif: `${config.POKEMON_IMAGE_GIF_URL}${id}.gif`,
                png: `${config.POKEMON_IMAGE_PNG_URL}${id}.png`,
            }
        }
    })
}

const controller = {
    parseResults
};

export default controller;