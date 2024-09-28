import { type IPokemon, type IPokemonPreview } from '@/lib/types/api.d';
import type { IPokemonAPI } from '../types/pokemon';

function parseResults(results: any): IPokemonPreview[] {
    return results.map((item: any) => {
        const id = item.url.split('/').slice(-2, -1)[0];

        return {
            id: parseInt(id),
            name: item.name
        }
    })
}

function parsePokemon(data: IPokemonAPI): IPokemon {
    return {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        abilities: data.abilities,
        stats: data.stats,
        types: data.types,
        weakness: [], //faltando
        evolution: [] //faltando
    }
}

const controller = {
    parseResults,
    parsePokemon
};

export default controller;