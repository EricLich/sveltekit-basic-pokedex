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
    export let poke: PokemonType;
</script>

<article class="w-[90%] m-auto flex-shrink">
    <div class="flex justify-around items-center">
        <img src={poke?.sprites?.front_default} class="w-[30%]" alt="">
        <img src={poke?.sprites?.back_default} class="w-[30%]" alt="">
    </div>
    <div class="w-full p-5 flex items-center justify-center">
        <h3 class="p-5 font-bold text-3xl uppercase">{poke.name}</h3>
    </div>
</article>