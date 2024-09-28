import type { Ability, Stat, Type } from "./pokemon";

export interface IPokemonPreview {
    id: number;
    name: string;
}

export interface IPokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    abilities: Ability[];
    stats: Stat[];
    types: Type[];
    weakness: Type[];
    evolution: IPokemonPreview[];
}

export interface NamedAPIResource {
    count: number;
    results: IPokemonPreview[];
}