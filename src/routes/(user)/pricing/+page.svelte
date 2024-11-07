<script>
    import buttonTextureSrc from "$lib/assets/pricing/button-texture.svg";
    import bridgeImgSrc from "$lib/assets/pricing/bridge.webp";
    import bayWindowSrc from "$lib/assets/pricing/bay-window.webp";
    import frenchDoorSrc from "$lib/assets/pricing/french-door.webp";
    import patioDoorSrc from "$lib/assets/pricing/patio-door.webp";
    import slidingDoorSrc from "$lib/assets/pricing/sliding-door.webp";
    import customArchSrc from "$lib/assets/pricing/custom-arch.webp";

    import { animate, scroll } from "motion";
    import { fade } from "svelte/transition";
	import { onMount } from "svelte";

    onMount(() => {
        scroll(
            animate(".bridge > div", { y: [200, -200] }), {
                target: document.querySelector(".bridge"),
                offset: ["start end", "end start"]
            }
        )
    })

    let selectedOptionSrc = bayWindowSrc;
</script>

<main>
    <article class="bg-white text-navy">
        <div class="heading">
            <h1 class="fs-heading">California Shutters Pricing</h1>
            <p>Commonly the price that you are given reflects the quality of the product that you are being provided.</p>
        </div>
        <div class="price-cards">
            <div class="card">
                <p class="fs-500">The Other Guys<br>Low Quality Shutters</p>
                <p class="price-range fs-heading">
                    <span class="price"><span class="dollar-sign">$</span>16</span> - <span class="price"><span class="dollar-sign">$</span>22</span>
                </p>
                <p class="unit fs-500">Per Sq. Ft</p>
                <div class="features fs-xs">
                    <ul>
                        <li>Low quality wood or plastic</li>
                        <li>Low quality shutter paint</li>
                        <li>Inexperience will give you headaches</li>
                    </ul>
                </div>
            </div>
            <div class="card our-price-range">
                <p class="fs-500">Our California Shutters<br>(OUR PRICE RANGE)</p>
                <p class="price-range fs-heading">
                    <span class="price"><span class="dollar-sign">$</span>22</span> - <span class="price"><span class="dollar-sign">$</span>40</span>
                </p>
                <p class="unit fs-500">Per Sq. Ft</p>
                <div class="features fs-xs">
                    <ul>
                        <li>High-quality American poplar</li>
                        <li>Best Chemcraft UV resistant wood finish & seal</li>
                        <li>Professional installation & customer service</li>
                    </ul>
                </div>
            </div>
            <div class="card">
                <p class="fs-500">Hunter Douglas<br>California Shutters</p>
                <p class="price-range fs-heading">
                    <span class="price"><span class="dollar-sign">$</span>35</span> - <span class="price"><span class="dollar-sign">$</span>50</span>
                </p>
                <p class="unit fs-500">Per Sq. Ft</p>
                <div class="features fs-xs">
                    <ul>
                        <li>High-quality American poplar</li>
                        <li>Best Chemcraft UV resistant polystain finish & seal, new style hybrid</li>
                        <li>Professional installation & customer service</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="prices-cta">
            <a href="/" class="bg-yellow text-navy">Get Started</a>
            <img src="{buttonTextureSrc}" alt="decorative texture behind the button">
        </div>
    </article>
    <div class="bridge text-navy" style="background-image: url({bridgeImgSrc})">
        <div>
            <h2 class="fs-xl">Why is our shutter so sought after?</h2>
            <p>Because it is the only branded shutter available in Canada that has a beveled front face. Flat was so yesterday. Curvy is in. Our shutter is the curviest of them all. Available in partially beveled and fully beveled styles, we definitely have the correct option for your home and windows.</p>
        </div>
    </div>
    <div class="options-container">
        <h2 class="fs-xl">Window types we can cover with our California shutters</h2>
        <div class="interactive-display">
            <!-- {#key selectedOptionSrc} -->
                <picture><img src="{selectedOptionSrc}" alt="selected option"></picture>
            <!-- {/key} -->
            <div class="options">
                <button class:active={selectedOptionSrc === bayWindowSrc} on:click={() => selectedOptionSrc = bayWindowSrc} class="text-white">Bay windows</button>
                <button class:active={selectedOptionSrc === frenchDoorSrc} on:click={() => selectedOptionSrc = frenchDoorSrc} class="text-white">French doors</button>
                <button class:active={selectedOptionSrc === patioDoorSrc} on:click={() => selectedOptionSrc = patioDoorSrc} class="text-white">Patio doors</button>
                <button class:active={selectedOptionSrc === slidingDoorSrc} on:click={() => selectedOptionSrc = slidingDoorSrc} class="text-white">Sliding doors</button>
                <button class:active={selectedOptionSrc === customArchSrc} on:click={() => selectedOptionSrc = customArchSrc} class="text-white">Custom arches</button>
            </div>
        </div>
    </div>
    <div class="cta">
        <h3 class="fs-xl">We can't wait to help you!</h3>
        <p>Use our price calculator and get your FREE quote now</p>
        <a href="/" class="bg-yellow text-navy">Get Started</a>
    </div>
</main>

<style>
    article {
        padding: var(--spacing);
        padding-block: 6.5rem;
    }

    .heading {
        text-align: center;
        max-width: 950px;
        margin: auto;
        margin-bottom: var(--spacing);
    }

    .price-cards {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        max-width: max-content;
        margin: auto;
        justify-content: center;
        position: relative;
        z-index: 2;
    }

    .card {
        border: 2px solid #182d384d;
        padding: calc(var(--spacing) / 2 + .5rem);
        width: 290px;
        background-color: var(--clr-white);
    }

    .price {
        position: relative;
    }

    .dollar-sign {
        position: absolute;
        font-size: 10px;
        translate: -100% 30%;
    }

    .price-range, .unit {
        text-align: center;
    }

    .unit {
        color: #808080;
    }

    .features {
        padding-top: var(--spacing);
        border-top: 1px solid #182d384d;
        margin-top: var(--spacing);
    }

    .features ul {
        padding: 0;
        margin: 0;
        list-style-position: inside;
    }

    .our-price-range .price-range {
        color: var(--clr-yellow);
    }

    .our-price-range .features {
        border-color: var(--clr-yellow);
    }

    .our-price-range {
        border-color: var(--clr-yellow);
        background-color: #fff4ec;
    }

    .prices-cta a {
        padding: .6rem 1.2rem;
        text-decoration: none;
        display: block;
        border-radius: .2rem;
    }

    .prices-cta {
        max-width: max-content;
        margin-inline: auto;
        margin-block: var(--spacing);
        position: relative;
        z-index: 1;
    }

    .prices-cta > img {
        position: absolute;
        min-width: 400px;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        z-index: -1;
    }

    .bridge {
        position: relative;
        min-height: 90vh;
        background-position: center center;
        background-size: cover;
    }

    .bridge {
        padding: var(--spacing);
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .bridge > * {
        max-width: 900px;
    }

    .bridge h2 {
        margin-bottom: var(--spacing);
    }

    .options-container {
        padding: var(--spacing);
    }

    .options-container h2 {
        max-width: 600px;
        text-align: center;
        margin-inline: auto;
        margin-bottom: var(--spacing);
    }

    .interactive-display {
        display: grid;
        max-width: 1400px;
        margin-inline: auto;
        grid-template-columns: repeat(2, 1fr);
    }

    .options {
        display: flex;
        flex-direction: column;
    }

    .options > * {
        background-color: #203c4c;
        flex: 1;
        transition: background-color 300ms ease-in-out;
    }

    .options > *:not(*:last-of-type) {
        border-bottom: 1px solid var(--clr-navy);
    }

    .cta {
        min-height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--spacing);
        padding: var(--spacing);
        text-align: center;
    }

    .cta a {
        padding: .6rem 1.2rem;
        text-decoration: none;
        border-radius: .2rem;
    }

    button.active {
        background-color: var(--clr-blue);
    }

    @media (min-width: 768px) {
        .dollar-sign {
            font-size: 16px;
        }

        .card {
            width: 360px;
        }
    }

    @media (min-width: 1024px) {
        .dollar-sign {
            font-size: 26px;
        }

        .card {
            width: 400px;
        }
    }

    @media (max-width: 600px) {
        .interactive-display {
            grid-template-columns: 1fr;
        }
    }
</style>