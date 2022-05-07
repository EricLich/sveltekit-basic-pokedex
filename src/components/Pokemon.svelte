<script lang="ts">
import type { PokemonType } from "src/types";

export let pokemon: PokemonType;
</script>

<a href={`/pokemon/${pokemon?.id}`} class="hover:scale-105 flex-grow duration-300 overflow-hidden decoration-0 w-full flex flex-col justify-center items-center mb-5 border rounded-xl shadow-sm md:h-[200px] md:w-[150px] md:justify-between">
    <div class="w-full md:h-[70%] bg-slate-200 flex items-center justify-center">
        <img src={pokemon.image} alt={`${pokemon.name} image`} class="w-[50%] md:w-[70%]">
    </div>
    <div class="p-5 ">
        <h3 class="uppercase font-semibold">{pokemon?.name}</h3>
    </div>
</a>
