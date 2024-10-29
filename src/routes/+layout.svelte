<script>
    import "../../src/global.css";
    import navbarLogoSrc from "$lib/assets/shared/navbar-logo.svg";
    import mobileNavbarLogoSrc from "$lib/assets/shared/mobile-navbar-logo.svg";
    import hamburgerIconSrc from "$lib/assets/shared/hamburger-icon.svg";
    import closeIconSrc from "$lib/assets/shared/close-icon.svg";
    import { navigating } from "$app/stores";
    import { ProgressBar } from "@prgm/sveltekit-progress-bar";

    $: if($navigating) {
        isMenuActive = false;
    }

    let isMenuActive = false;
</script>

<nav>
    <ProgressBar color="#FFFFFF"/>
    <a href="/">
        <picture>
            <source srcset="{navbarLogoSrc}" media="(min-width: 1150px)">
            <img src="{mobileNavbarLogoSrc}" alt="mobile logo">
        </picture>
    </a>
    <ul class="fs-300" class:active={isMenuActive}>
        <li><a href="/">Home</a></li>
        <li><a href="/">About us</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/">Contact us</a></li>
        <button class="menu-close" on:click={() => isMenuActive = false}><img src="{closeIconSrc}" alt="close icon"></button>
    </ul>
    <button>Free Estimate</button>
    <button class="menu-open" on:click={() => isMenuActive = true}><img src="{hamburgerIconSrc}" alt="menu icon"></button>
</nav>

<slot></slot>

<style>
    nav {
        background-color: var(--clr-yellow);
        display: flex;
        align-items: center;
        gap: var(--spacing);
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
        gap: 2rem;
    }

    a {
        color: var(--clr-navy);
        text-decoration: none;
    }

    nav > button {
        margin-left: auto;
        border: 1px solid var(--clr-navy);
        background-color: transparent;
        border-radius: 0;
        padding: .6rem 1.2rem;
    }

    button.menu-open, button.menu-close {
        /* padding: 0 1rem; */
        display: none;
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
            padding: 1rem;
            translate: 100% 0;
            transition: all 300ms ease;
        }

        ul.active {
            translate: 0;
        }

        picture > img {
            max-width: 50px;
        }

        button.menu-open, button.menu-close {
            display: block;
        }

        button.menu-close {
            position: absolute;
            top: .5rem;
            right: .5rem;
            padding: 0;
        }
    }
</style>