export type PokemonType = {
    id: number;
    name: string;
    image: string;
    sprites?: {
        front_default?: string;
        back_default: string;
    }
}