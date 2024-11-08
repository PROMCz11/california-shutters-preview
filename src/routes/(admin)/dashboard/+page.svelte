<script>
    export let data;
    const { adminDetails } = data;
    const { email, role } = adminDetails;
</script>

<main class="fs-300">
    <h2>Admin Dashboard</h2>
    <h3>Account details</h3>
    <p>Email: {email}</p>
    <p>Role: {role}</p>
    <h3>Navigation</h3>
    <a href="dashboard/quotes"><button>Quotes</button></a>
    <a href="dashboard/blogs"><button>Blogs</button></a>
</main>

<style>
    h3 {
        margin-top: 1rem;
    }

    main {
        min-height: 100vh;
        min-height: 100svh;
        background-color: black;
        color: #a1a1a1;
        padding: .5rem;
    }

    button {
        border: 1px solid #a1a1a166;
        color: #a1a1a1;
        background-color: black;
        padding: .2rem .6rem;
        cursor: pointer;

        transition: all 30ms ease-in-out;
    }

    button:hover {
        color: white;
        border-color: white;
    }

    button:active {
        color: black;
        background-color: white;
    }
</style>