import type { IPokemon, NamedAPIResource } from '../types/api';
import type { IPokemonAPI } from '../types/pokemon';
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
    const data:IPokemonAPI = await routes.fetchPokemonId(id);
    const result:IPokemon = controller.parsePokemon(data);
    
    return result;
}

const api = {
    getAll,
    getUnique
};

export default api;