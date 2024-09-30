import type { IPokemonPreview } from "@/lib/types/pokemon";

type PokemonDataStore = Record<string, IPokemonPreview>;
type FiltersData = {
    search: string;
    types: number[];
    favorite: boolean;
}

function filter(data: PokemonDataStore, filters: FiltersData): PokemonDataStore {
    const filteredPokemons: PokemonDataStore = data;

    for (const id in filteredPokemons) {
        const pokemon: IPokemonPreview = filteredPokemons[id];
        const { search, types, favorite } = filters;

        if (favorite && !pokemon.favorite)
            delete filteredPokemons[id];

        if (types.length > 0 && !types.includes(pokemon.id))
            delete filteredPokemons[id];

        if (search && !pokemon.name.includes(search.toLowerCase()))
            delete filteredPokemons[id];
    }
    
    return filteredPokemons;
}

function pagination(data: PokemonDataStore, page: number, perPage: number) {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return Object.values(data).slice(start, end);
}

interface IPokemonFilter {
    pokemons: PokemonDataStore;
    filters: FiltersData;
    page: number;
    perPage: number;
    count: number;
}

export function pokemonFilter(data: IPokemonFilter) {
    const { pokemons, filters, page, perPage, count } = data;
    const filteredPokemons = filter(pokemons, filters);
    const paginatedPokemons = pagination(filteredPokemons, page, perPage);
    let total = 0;

    if (filters.favorite || filters.types.length || filters.search) {
        total = Object.values(filteredPokemons).length;
    } else {
        total = count;
    }
    return {
        pokemons: paginatedPokemons,
        total: total,
    };
}