<script>
    import "../../../src/global.css";
    import navbarLogoSrc from "$lib/assets/shared/navbar-logo.svg";
    import mobileNavbarLogoSrc from "$lib/assets/shared/mobile-navbar-logo.svg";
    import hamburgerIconSrc from "$lib/assets/shared/hamburger-icon.svg";
    import closeIconSrc from "$lib/assets/shared/close-icon.svg";
    import stackedLogoSrc from "$lib/assets/shared/stacked-logo.svg";
    import facebookIconSrc from "$lib/assets/shared/facebook.svg";
    import instagramIconSrc from "$lib/assets/shared/instagram.svg";
    import { navigating } from "$app/stores";
    import { ProgressBar } from "@prgm/sveltekit-progress-bar";

    import { inView } from "motion";
    import { afterNavigate } from '$app/navigation';
    let isShadowCTAActive = false;
    onMount(() => {
        inView(".note", () => {
            isShadowCTAActive = true;
        })
    

        // // Handling page loading
        // const handleLoad = () => document.getElementById("loader").style.display = "none";
        // if (document.readyState === 'complete') {
        //     handleLoad();
        // } else {
        //     window.addEventListener('load', handleLoad);
        // }
    })

    afterNavigate(() => {
        inView(".note", () => {
            isShadowCTAActive = true;
        })
        // handleLoad()
    })
    
    import { isHomepage } from "$lib/stores";

	import { onMount } from "svelte";

    $: if($navigating) {
        isMenuActive = false;
        $isHomepage = false;
        if($navigating.to.route.id === "/(user)") {
            $isHomepage = true;
            isShadowCTAActive = false;
            inView(".note", () => {
                isShadowCTAActive = true;
            })
        }
        
    }

    let isMenuActive = false;
</script>

<nav class="bg-navy" class:home-page={$isHomepage}>
    <ProgressBar color="#FFB621"/>
    <a href="/">
        <picture>
            <source srcset="{navbarLogoSrc}" media="(min-width: 1150px)">
            <img src="{mobileNavbarLogoSrc}" alt="mobile logo">
        </picture>
    </a>
    <ul class="fs-300" class:active={isMenuActive}>
        <li><a href="/">Home</a></li>
        <li><a href="/about-us">About us</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="#contact-info">Contact us</a></li>
        <button class="menu-close" on:click={() => isMenuActive = false}><img src="{closeIconSrc}" alt="close icon"></button>
    </ul>
    <a class="button" class:active={isShadowCTAActive} href="/"><button class="fs-xs">Free Estimate</button></a>
    <button class="menu-open" on:click={() => isMenuActive = true}><img src="{hamburgerIconSrc}" alt="menu icon"></button>
</nav>

<slot></slot>

<footer id="contact-info" class="fs-xs">
    <img src="{stackedLogoSrc}" alt="logo">
    <div>
        <p class="text-white">416-835-1312</p>
        <p>180finchdeene sq Toronto Unit 13</p>
    </div>
    <p>Info@californiashutterstoronto.com</p>
    <div class="socials"><img src="{instagramIconSrc}" alt="instagram icon"><p>californiashutterstoronto</p><img src="{facebookIconSrc}" alt="facebook icon"></div>
</footer>

<style>
    nav {
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
        color: var(--clr-white);
        text-decoration: none;
    }

    nav a.button {
        margin-left: auto;
    }

    nav > a > button {
        border: 1px solid var(--clr-navy);
        padding: .3rem .6rem;
        border: 1px solid transparent;
        background-color: var(--clr-yellow);
        color: var(--clr-navy);
    }

    button.menu-open, button.menu-close {
        display: none;
        margin: 0;
        border: 0;
        padding: 0;
    }

    footer {
        padding: var(--spacing);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--spacing);
        align-items: end;
        justify-items: center;
    }

    footer > img {
        grid-column: span 3;
    }

    footer .socials {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    footer .socials img {
        max-width: 20px
    }

    nav.home-page > a > button {
        transition: all 200ms ease-in-out;
    }

    nav.home-page > a > button {
        background-color: transparent;
        border: 1px solid var(--clr-white);
        color: var(--clr-white);
    }

    nav.home-page > a.active > button {
        background-color: var(--clr-yellow);
        border: 1px solid transparent;
        color: var(--clr-navy);
    }

    @media (max-width: 1150px) {
        ul {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            width: 200px;
            background-color: var(--clr-navy);
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

    @media (max-width: 850px) {
        footer {
            grid-template-columns: 1fr;
            gap: calc(var(--spacing) * 2 - .5rem);
            text-align: center;
        }

        footer > img {
            grid-column: unset;
        }
    }
</style>