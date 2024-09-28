import type { IPokemonPreview } from "./pokemon";

export interface NamedAPIResource {
    count: number;
    results: IPokemonPreview[];
}