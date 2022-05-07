<script context="module" lang="ts">
    import type { PokemonType } from "src/types";

    export async function load({ params }: any) {
        const id = params.id;
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const poke: PokemonType = await res.json();
        return {
            props: {
                poke
            }
        }
    }
</script>

<script lang="ts">
    export let poke: PokemonType | any;
    console.log(poke)
</script>

<article class="w-[90%] m-auto flex-shrink">
    <div class="flex justify-around items-center">
        <img src={poke?.sprites?.front_default} class="w-[30%]" alt="">
        <img src={poke?.sprites?.back_default} class="w-[30%]" alt="">
    </div>
    <div class="w-full p-5 flex items-center justify-center">
        <h3 class="p-5 font-bold text-3xl uppercase">{poke.name}</h3>
    </div>
    <div class="flex w-full md:w-2/3 m-auto flex-col md:flex-row md:justify-around items-center">
        <div class="w-full mb-2 md:w-[40%] border rounded-xl p-2 capitalize hover:scale-105 duration-300">
            <h3 class="text-black text-xl font-semibold mb-2">Abilities</h3>
            {#each poke?.abilities as ability}
                <p class="decoration-slate-700 mb-1">{ability?.ability?.name}</p>
            {/each}
        </div>
        <div class="w-full mb-2 md:w-[40%] border rounded-xl p-2 capitalize hover:scale-105 duration-300">
            <h3 class="text-black text-xl font-semibold mb-2">Types</h3>
            {#each poke?.types as type}
                <p class="decoration-slate-700 mb-1">{type?.type?.name}</p>
            {/each}
        </div>
    </div>
</article>