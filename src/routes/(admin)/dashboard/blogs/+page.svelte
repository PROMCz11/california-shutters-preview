<script>
	import { goto } from "$app/navigation";

    export let data;
    let { blogs } = data;

    // let blogs = [
    //     {title: "Top 15 Shutters in Toronto you should be looking out for", blogID: 2, date: 1731096226817},
    //     {title: "Top 15 Shutters in Toronto you should be looking out for", blogID: 2, date: 1731096226817},
    //     {title: "Top 15 Shutters in Toronto you should be looking out for", blogID: 2, date: 1731096226817},
    //     {title: "Top 15 Shutters in Toronto you should be looking out for", blogID: 2, date: 1731096226817},
    //     {title: "Top 15 Shutters in Toronto you should be looking out for", blogID: 2, date: 1731096226817},
    //     {title: "Top 15 Shutters in Toronto you should be looking out for", blogID: 2, date: 1731096226817},
    //     {title: "Top 15 Shutters in Toronto you should be looking out for", blogID: 2, date: 1731096226817},
    // ]

    const deleteBlog = (blogID) => {
        fetch("../../api/blogs/delete", {
            method: "DELETE",
            body: JSON.stringify({
                ids: [blogID]
            }),
            headers: { "Content-Type": "application/json" }
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            if(!json.status) {
                return;
            }
            blogs = blogs.filter(blog => blog.blogID != blogID);
        })
        .catch(err => console.log(err));
    }

    const formatDate = (ms) => {
        const date = new Date(ms);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
</script>

<svelte:head>
	<title>Blogs</title>
	<!-- <meta name="description" content="This is where the description goes for SEO" /> -->
</svelte:head>

<main>
    <a href="/dashboard"><button>Back to Dashboard</button></a>
    <h2>Blogs</h2>
    <button on:click={() => goto("/dashboard/blogs/upload")}>Add</button>
    {#each blogs as { title, blogID, date }}
        <div class="blog">
            <p>{title}</p>
            <p>{formatDate(date)}</p>
            <button on:click={() => {
                goto(`/blog/${blogID}`)
            }}>Checkout</button>
            <button on:click={() => {
                deleteBlog(blogID);
            }}>Delete</button>
        </div>
    {/each}
</main>

<style>
    main {
        padding: .5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .blog {
        display: flex;
        gap: .5rem;
    }

    button {
        border: 1px solid black;
        border-radius: .5rem;
        padding: .2rem .6rem;
        color: black;
        background-color: white;
        cursor: pointer;
        max-width: max-content;
    }

    button:active {
        background-color: #C3D6FF;
        border-color: #001882;
        color: black;
    }
</style>