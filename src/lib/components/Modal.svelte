<script>
	import { fade } from "svelte/transition";
    import { showModal } from "$lib/stores";

    export let heading, paragraph, buttonText;
</script>

<div transition:fade={{ duration: 100 }} class="wrapper text-white fs-400">
    <div class="main bg-navy">
        <h2 class="fs-500">{heading}</h2>
        <p>{paragraph}</p>
        <button class="text-yellow" on:click={() => $showModal = false}>{buttonText}</button>
    </div>
</div>

<style>
    .wrapper {
        position: fixed;
        inset: 0;
        background-color: #0f1f28cd;
        z-index: 101;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .main {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        max-width: 500px;
        padding: 2rem;
        margin-inline: 1rem;
    }

    .main button {
        align-self: flex-end;
    }
</style>