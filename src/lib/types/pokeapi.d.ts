interface Ability {
    is_hidden: boolean;
    slot: number;
    ability: NamedAPIResource;
}

interface NamedAPIResource {
    name: string;
    url: string;
}

interface Form {
    name: string;
    url: string;
}

interface GameIndex {
    game_index: number;
    version: NamedAPIResource;
}

interface HeldItem {
    item: NamedAPIResource;
    version_details: VersionDetail[];
}

interface VersionDetail {
    rarity: number;
    version: NamedAPIResource;
}

interface Move {
    move: NamedAPIResource;
    version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
    level_learned_at: number;
    version_group: NamedAPIResource;
    move_learn_method: NamedAPIResource;
}

interface PokemonSpecies {
    name: string;
    url: string;
}
  
interface Sprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other?: OtherSprites;
    versions?: GenerationSprites;
}
  
interface OtherSprites {
    dream_world: SpriteResource;
    home: SpriteResource;
    "official-artwork": SpriteResource;
    showdown?: SpriteResource;
}
  
interface SpriteResource {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
}
  
interface GenerationSprites {
    "generation-i": GenerationISprites;
    "generation-ii": GenerationIISprites;
    "generation-iii": GenerationIIISprites;
    "generation-iv": GenerationIVSprites;
    "generation-v": GenerationVSprites;
    "generation-vi": GenerationVISprites;
    "generation-vii": GenerationVIISprites;
    "generation-viii": GenerationVIIISprites;
}
  
interface GenerationISprites {
    "red-blue": SpriteSet;
    yellow: SpriteSet;
}
  
interface SpriteSet {
    back_default: string | null;
    back_gray: string | null;
    front_default: string | null;
    front_gray: string | null;
}
  
interface GenerationIISprites extends SpriteSet {
    crystal: SpriteSet;
    gold: SpriteSet;
    silver: SpriteSet;
}
  
interface GenerationIIISprites {
    emerald: SpriteResource;
    "firered-leafgreen": SpriteSet;
    "ruby-sapphire": SpriteSet;
}
  
interface GenerationIVSprites extends SpriteSet {
    "diamond-pearl": SpriteSet;
    "heartgold-soulsilver": SpriteSet;
    platinum: SpriteSet;
}
  
interface GenerationVSprites {
    "black-white": {
    animated: SpriteSet;
    } & SpriteSet;
}
  
interface GenerationVISprites {
    "omegaruby-alphasapphire": SpriteResource;
    "x-y": SpriteResource;
}
  
interface GenerationVIISprites {
    icons: SpriteSet;
    "ultra-sun-ultra-moon": SpriteResource;
}
  
interface GenerationVIIISprites {
    icons: SpriteSet;
}
  
interface Stat {
    base_stat: number;
    effort: number;
    stat: NamedAPIResource;
}
  
interface Type {
    slot: number;
    type: NamedAPIResource;
}
  
interface PastType {
    generation: NamedAPIResource;
    types: Type[];
}
  
export interface IPokemonAPI {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: Ability[];
    forms: Form[];
    game_indices: GameIndex[];
    held_items: HeldItem[];
    location_area_encounters: string;
    moves: Move[];
    species: PokemonSpecies;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    past_types: PastType[];
}