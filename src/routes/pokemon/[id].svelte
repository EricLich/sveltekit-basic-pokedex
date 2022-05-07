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
    <div class="w-full p-5 flex items-center justify-center">
        <h3 class="p-5 font-bold text-3xl uppercase">{poke.name}</h3>
    </div>
    <div class="flex flex-col justify-around items-center">
        <div class="w-full flex flex-col  justify-center items-center">
            <h3 class="font-bold">Normal Form</h3>
            <div class="w-full md:w-[60%] flex flex-col md:flex-row items-center justify-center md:gap-8">
                <img src={poke?.sprites?.front_default} class="w-full m-auto border rounded-lg mt-3" alt="">
                <img src={poke?.sprites?.back_default} class="w-full m-auto border rounded-lg mt-3" alt="">
            </div>
        </div>

        <div class="w-full md:w-[60%] flex flex-col  justify-center items-center">
            <h3 class="font-bold mt-5">Shiny </h3>
            <div class="w-full flex flex-col md:flex-row items-center justify-center md:gap-8">
                <img src={poke?.sprites?.front_shiny} class="w-full m-auto border rounded-lg mt-3" alt="">
                <img src={poke?.sprites?.back_shiny} class="w-full m-auto border rounded-lg mt-3" alt="">
            </div>
        </div>
    </div>
    <div class="flex w-full md:w-2/3 min-h:[120px] m-auto flex-col md:flex-row md:justify-around items-center mt-2 md:mt-5">
        <div class="w-full mb-2 md:w-[40%] h-full border rounded-xl p-2 capitalize hover:scale-105 duration-300">
            <h3 class="text-black text-xl font-semibold mb-2">Abilities</h3>
            {#each poke?.abilities as ability}
                <p class="decoration-slate-700 mb-1">{ability?.ability?.name}</p>
            {/each}
        </div>
        <div class="w-full mb-2 md:w-[40%] h-full border rounded-xl p-2 capitalize hover:scale-105 duration-300">
            <h3 class="text-black text-xl font-semibold mb-2">Types</h3>
            {#each poke?.types as type}
                <p class="decoration-slate-700 mb-1">{type?.type?.name}</p>
            {/each}
        </div>
    </div>
</article>