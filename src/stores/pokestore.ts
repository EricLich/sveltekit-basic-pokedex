import { writable } from "svelte/store";

export const pokemon = writable([]);

export const fetchPokemon = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=386');
    const data = await res?.json();
    const loadedPokemon = data?.results?.map((pokemon: any, index: number) => {
        return {
            name: pokemon?.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }
    });

    pokemon.set(loadedPokemon);
};

fetchPokemon();