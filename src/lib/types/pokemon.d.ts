import type { Ability, Type } from "./pokeapi";

export interface IPokemonPreview {
    id: number;
    name: string;
}

export interface IPokemonStats {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
}

export type PokemonTypeNames = "normal" | "fighting" | "flying" | "poison" | "ground" | "rock" | "bug" | "ghost" | "steel" | "fire" | "water" | "grass" | "electric" | "psychic" | "ice" | "dragon" | "dark" | "fairy";

export interface IPokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    description: string[];
    abilities: Ability[];
    stats: IPokemonStats;
    types: PokemonTypeNames[];
    weakness: Type[];
    evolution: IPokemonPreview[];
}

export interface NamedAPIResource {
    count: number;
    results: IPokemonPreview[];
}