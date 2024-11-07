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

    const deleteBlog = blogID => {
        fetch("../api/blogs/delete", {
            method: "POST",
            body: JSON.stringify({
                ids: [blogID]
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
    <input type="text" placeholder="blogID to delete" on:keydown={e => {
        if(e.key === "Enter") {
            const blogID = e.target.value;
            deleteBlog(blogID);
        }
    }}>
</main>

<style>
    main {
        padding: .5rem;
    }

    input {
        display: block;
        margin-block: .5rem;
    }
</style>