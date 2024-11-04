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
    let nameFromInput;

    const addName = () => {
        fetch("../api", {
            method: "POST",
            body: JSON.stringify({ name: nameFromInput }),
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
        })
        .catch(err => console.log(err))
    }
</script>

<main>
    <button on:click={fetchAPI}>Fetch /api</button>
    <p>Status: {status}</p>

    <div>
        <input bind:value={nameFromInput} type="text" placeholder="Add name to the DB">
        <button on:click={addName}>Add</button>
    </div>
</main>

<style>
    main {
        padding: .5rem;
    }
</style>