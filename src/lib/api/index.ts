import type { IPokemon, NamedAPIResource } from '../types/pokemon';
import type { IPokemonAPI } from '../types/pokeapi';
import controller from './controller';
import routes from './routes';

export interface IGetAllOptions {
    limit: number;
    offset: number;
}

async function getAll(options: IGetAllOptions): Promise<NamedAPIResource> {
    const data = await routes.fetchNamedAPIResourcePokemon(options);
    const results = controller.parseResults(data.results);

    return { results, count: data.count };
}

async function getUnique(id: string): Promise<IPokemon> {
    const pokemon:IPokemonAPI = await routes.fetchPokemonId(id);
    const specieId = pokemon.species.url.split('/').slice(-2)[0];
    const specie = await routes.fetchPokemonSpecies(specieId);
    const evolutionId = specie.evolution_chain.url.split('/').slice(-2)[0];
    const evolutionChain = await routes.fetchPokemonEvolutionChain(evolutionId);
    
    return {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        abilities: pokemon.abilities,
        stats: controller.parseStats(pokemon.stats),
        types: controller.parseTypes(pokemon.types),
        weakness: [], //faltando
        evolution: controller.parseEvolutionChain(evolutionChain)
    };
}

const api = {
    getAll,
    getUnique
};

export default api;