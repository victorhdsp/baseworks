import type { NamedAPIResource } from '../types/api';
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

const api = {
    getAll,
};

export default api;