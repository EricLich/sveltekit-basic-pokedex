<script lang="ts">
import Pokemon from "../components/Pokemon.svelte";
import { pokemon } from "../stores/pokestore";
import type { PokemonType } from '../types';
import { fade } from "svelte/transition";

let filtered: PokemonType[] | undefined;
let noResults: boolean;

function filterPokemon(e: any){
    const { value } = e.target;    
    filtered = $pokemon.filter((poke: PokemonType, index) => poke?.name.includes(value.toLowerCase()));
    noResults = filtered && filtered.length < 1 ? true : false
}

</script>

<svelte:head>
    <title>First app with SvelteKit</title>
</svelte:head>

<main class="flex flex-col justify-center">
  <input type="text" class="w-[90%] md:w-[50%] h-[40px] border rounded-xl m-auto mb-5 px-5 focus:outline-red-200" on:input={(e) => filterPokemon(e)}>
  <div class="w-[90%] m-auto md:flex md:flex-wrap md:gap-4">
      {#if filtered}
          {#each filtered as pokemon, index}
          <Pokemon {pokemon} />
          {/each}
      {:else}
      {#each $pokemon as pokemon, index}
         <Pokemon {pokemon} />
      {/each}
      {/if}
      {#if noResults && filtered}
        <h1 transition:fade class="w-full rounded-lg border border-red-500 bg-red-100 text-red-500 p-3 text-center">No results</h1>
      {/if}
  </div>
</main>

