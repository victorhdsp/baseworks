import type { IPokemonPreview, IPokemonStats, PokemonTypeNames } from '@/lib/types/pokemon';

function parseResults(results: any): IPokemonPreview[] {
    return results.map((item: any) => {
        const id = item.url.split('/').slice(-2, -1)[0];

        return {
            id: parseInt(id),
            name: item.name
        }
    })
}

function parseStats(stats: any): IPokemonStats {
    return {
        hp: stats.find((item: any) => item.stat.name === 'hp').base_stat || 0,
        attack: stats.find((item: any) => item.stat.name === 'attack').base_stat || 0,
        defense: stats.find((item: any) => item.stat.name === 'defense').base_stat || 0,
        specialAttack: stats.find((item: any) => item.stat.name === 'special-attack').base_stat || 0,
        specialDefense: stats.find((item: any) => item.stat.name === 'special-defense').base_stat || 0,
        speed: stats.find((item: any) => item.stat.name === 'speed').base_stat || 0
    }
}

function parseTypes(types: any): PokemonTypeNames[] {
    return types.map((item: any) => item.type.name);
}

function parseEvolutionChain(evolutionChain: any): IPokemonPreview[] {
    const chain = [evolutionChain.chain];
    const parsedChain: IPokemonPreview[] = [];

    function parseChain(evolves_to: any[]): void {
        if (evolves_to.length === 0) return;
        if (evolves_to.length > 0) {
            evolves_to.forEach((item: any) => {
                parsedChain.push({
                    id: parseInt(item.species.url.split('/').slice(-2, -1)[0]),
                    name: item.species.name
                });
                parseChain(item.evolves_to);
            });
        }
    }
    parseChain(chain);
    return parsedChain;
}

function parseDescription(flavor_text_entries: any): string[] {
    const data:any[] = flavor_text_entries.filter((item: any) => item.language.name === 'en');
    let descriptions = data.map((item: any) => item.flavor_text);
    descriptions = descriptions.filter((item, index) => descriptions.indexOf(item) === index);
    return descriptions.slice(0, 3);
}

const controller = {
    parseResults,
    parseStats,
    parseTypes,
    parseEvolutionChain,
    parseDescription
};

export default controller;