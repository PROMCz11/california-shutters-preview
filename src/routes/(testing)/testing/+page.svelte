<script>
    // const fetchAPI = async () => {
    //     status = "No data yet";
    //     const res = await fetch("../api");
    //     const json = await res.json();
    //     console.log(json);
    //     status = "Data recieved, check the console";
    // }

    const fetchAPI = () => {
        status = "No data yet";
        fetch("../api")
        .then(res => res.json())
        .then(json => {
            console.log(json);
            status = "Data recieved, check the console";
        })
        .catch(err => {
            console.log(err);
            status = "Error, check the console";
        })
    }

    let status = "No data yet"
</script>

<main>
    <button on:click={fetchAPI}>Fetch /api</button>
    <p>Status: {status}</p>
</main>

<style>
    main {
        padding: .5rem;
    }
</style>