<script>
    import "../../src/global.css";
    import navbarLogoSrc from "$lib/assets/shared/navbar-logo.svg";
</script>

<nav>
    <a href="/"><img src="{navbarLogoSrc}" alt="logo"></a>
    <ul class="fs-300">
        <li><a href="/">Home</a></li>
        <li><a href="/">About us</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/">Contact us</a></li>
    </ul>
    <button>Btn</button>
</nav>

<slot></slot>

<style>
    nav {
        background-color: var(--clr-yellow);
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: .5rem;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        align-items: center;
        gap: 2rem   ;
    }

    a {
        color: var(--clr-navy);
        text-decoration: none;
    }

    button {
        margin-left: auto;
        border: 1px solid var(--clr-navy);
        background-color: transparent;
        border-radius: 0;
        padding: .6rem 1.2rem;
    }

    @media (max-width: 1150px) {
        ul {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            width: 200px;
            background-color: var(--clr-yellow);
            flex-direction: column;
            align-items: start;
            z-index: 10;
            display: none;
        }
    }
</style>