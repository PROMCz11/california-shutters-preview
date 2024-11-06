<script>
    const getBlogs = () => {
        fetch("../api/admin/login", {
            method: "POST",
            body: JSON.stringify({
                email: "admin@gmail.com",
                password: ""
            }),
            headers: { "Content-Type": "application/json" }
        })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
    }
</script>

<main>
    <button on:click={getBlogs}>Fetch blogs</button>
</main>

<style>
    main {
        padding: .5rem;
    }
</style>