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

const routes = {
    fetchNamedAPIResourcePokemon,
};

export default routes;