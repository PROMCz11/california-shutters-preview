<script>
    import aboutUsHeadingSrc from "$lib/assets/about-us/about-us-heading.webp";

    import ADevineDesignLogoSrc from "$lib/assets/about-us/a-devine-design.svg";
    import rollerBlindsLogoSrc from "$lib/assets/about-us/roller-blinds-toronto.svg";
    import shutterBoysLogoSrc from "$lib/assets/about-us/shutter-boys.svg";

    import { animate, scroll } from "motion";
	import { onMount } from "svelte";

    onMount(() => {
        // scroll(
        //     animate("article picture img", { y: [-100, 100] }), {
        //         target: document.querySelector("article picture img"),
        //         offset: ["end 50%", "start end"] // Should be more optimized later
        //     }
        // )
    })
</script>

<main>
    <article>
        <picture><img src="{aboutUsHeadingSrc}" alt="shutter"><div class="frame"></div></picture>
        <h1 class="fs-xl">We cover your windows with a heavenly touch</h1>
        <p>Many years ago, our founder had a vision to furnish every home in Toronto and surrounding regions with the highest quality wood shutter available on the market. 25 years to that day, and our shutters are finally filling homes across the nation! We've successfully served thousands of delighted customers, and we are ready to give you the same service, quality and price that we've always been known for.</p>
    </article>
    <p>California Shutters Toronto is the manufacturing arm of <span class="text-yellow">A Divine Design</span>, specializing in the production of premium California shutters. With over two decades of experience, We focus on creating high-quality shutters using premium poplar wood, ensuring durability and timeless appeal. Additionally, through our sister brands, <span class="text-yellow">Shutter Boys</span> and <span class="text-yellow">Roller Blinds Toronto</span>, we offer a wide range of custom blinds and roller blinds, providing complete window covering solutions for high-end homeowners, custom home builders, and interior designers.</p>
    <div class="logos">
        <img src="{shutterBoysLogoSrc}" alt="shutter boys company logo">
        <img src="{rollerBlindsLogoSrc}" alt="roller blinds company logo">
        <img src="{ADevineDesignLogoSrc}" alt="a devine design company logo">
    </div>
    
</main>
<div class="box"></div>

<style>
    main {
        padding: var(--spacing);
        padding-top: 9.5rem;
        max-width: 1150px;
        margin: auto;
    }

    article {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 2;
        gap: var(--spacing);
        align-items: center;
        justify-items: center;
    }

    article > * {
        max-width: 700px;
    }

    article h1 {
        align-self: end;
    }

    article p {
        align-self: start;
    }

    article picture {
        grid-row: span 2;
        max-width: 500px;
        position: relative;
        margin-top: 1rem;
    }

    article picture > img {
        translate: -5% -5%;
    }

    .frame {
        width: 100%;
        height: 100%;
    }

    main > p {
        margin-block: calc(var(--spacing) * 2);
    }

    .logos {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: var(--spacing);
    }

    .logos img:nth-of-type(1) {
        max-width: 130px;
    }

    .logos img:nth-of-type(2) {
        max-width: 300px;
    }

    .logos img:nth-of-type(3) {
        max-width: 200px;
    }

    @media (max-width: 700px) {
        .logos {
            flex-direction: column;
        }
    }
    
    @media (max-width: 1150px) {
        main {
            padding-top: 6.5rem;
        }

        article {
            grid-template-columns: 1fr;
        }

        article h1 {
            order: -1;
        }
    }

</style>