<script>
import Pokemon from "../components/Pokemon.svelte";
import { pokemon } from "../stores/pokestore";

</script>

<svelte:head>
    <title>First app with SvelteKit</title>
</svelte:head>

<div class="w-[90%] m-auto md:flex md:flex-wrap md:gap-4">
    {#each $pokemon as pokemon, index}
       <Pokemon {pokemon} />
    {/each}
</div>

