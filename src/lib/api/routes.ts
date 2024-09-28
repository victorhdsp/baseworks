import config from '@/lib/config';

export interface IGetAllOptions {
    limit: number;
    offset: number;
}

async function fetchNamedAPIResourcePokemon(options: IGetAllOptions): Promise<any> {
    const { limit, offset } = options;
    const url = `${config.POKEMON_API_URL}/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function fetchPokemonId(id: string): Promise<any> {
    const url = `${config.POKEMON_API_URL}/pokemon/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function fetchPokemonEvolutionChain(id: string): Promise<any> {
    const url = `${config.POKEMON_API_URL}/evolution-chain/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function fetchPokemonSpecies(id: string): Promise<any> {
    const url = `${config.POKEMON_API_URL}/pokemon-species/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const routes = {
    fetchNamedAPIResourcePokemon,
    fetchPokemonId,
    fetchPokemonEvolutionChain,
    fetchPokemonSpecies
};

export default routes;