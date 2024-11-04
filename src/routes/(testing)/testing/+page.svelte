<script>
    const fetchAPI = async () => {
        const res = await fetch("../api");
        const json = await res.json();
        console.log(json);
    }
</script>

<main>
    <p>Check the console</p>
    <button on:click={fetchAPI}>Fetch /api</button>
</main>

<style>
    main {
        padding: .5rem;
    }
</style>