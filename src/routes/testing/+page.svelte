<script>
    const login = () => {
        fetch("../api/admin/login", {
            method: "POST",
            body: JSON.stringify({
                email: "admin@gmail.com",
                password: "8qUv2/>nzP9Q.RT"
            }),
            headers: { "Content-Type": "application/json" }
        })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
    }
</script>

<main>
    <button on:click={login}>Login</button>
</main>

<style>
    main {
        padding: .5rem;
    }
</style>