<script>
	import { enhance } from "$app/forms";
    // export let data;
    export let form;
    // $: console.log(form);
    // $: errorMessage = data.message;
    // $: console.log(errorMessage);
</script>

<main class="fs-400">
    <form action="?/login" method="POST" use:enhance>
        <h2>Admin login</h2>
        <p>Email</p>
        <input type="email" name="email" placeholder="Enter your email">
        <p>Password</p>
        <input type="password" name="password" placeholder="Enter your password">
        {#if form?.message}
            <div class="error fs-300">{form?.message}</div>
        {/if}
        <button>Login</button>
    </form>
</main>

<style>

    main {
        background-color: black;
        color: #a1a1a1;
        min-height: 100vh;
        min-height: 100svh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    button, input {
        border: 1px solid #a1a1a166;
        color: #a1a1a1;
        background-color: black;
        padding: .2rem .6rem;

        transition: all 30ms ease-in-out;
    }

    button:hover, input:hover {
        color: white;
        border-color: white;
    }

    button:active {
        color: black;
        background-color: white;
    }

    button {
        cursor: pointer;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    form input {
        margin-bottom: 1rem;
    }

    form button {
        max-width: max-content;
    }

    form .error {
        color: red;
        text-align: center;
        margin-bottom: 1rem;
    }
</style>