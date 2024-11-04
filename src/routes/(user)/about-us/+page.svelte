<script>
    import aboutUsHeadingSrc from "$lib/assets/about-us/about-us-heading.webp";

    import ADevineDesignLogoSrc from "$lib/assets/about-us/a-devine-design.svg";
    import rollerBlindsLogoSrc from "$lib/assets/about-us/roller-blinds-toronto.svg";
    import shutterBoysLogoSrc from "$lib/assets/about-us/shutter-boys.svg";

    import aboutUsMain1Src from "$lib/assets/about-us/about-us-main-1.png";
    import aboutUsMain2Src from "$lib/assets/about-us/about-us-main-2.png";

    import { animate, scroll } from "motion";
	import { onMount } from "svelte";

    onMount(() => {
        // scroll(
        //     animate("article picture img", { y: [-100, 100] }), {
        //         target: document.querySelector("article picture img"),
        //         offset: ["end 50%", "start end"] // Should be more optimized later
        //     }
        // )

        scroll(
            animate(".main-1 picture img", { y: [-50, 50] }), {
                target: document.querySelector(".main-1"),
                offset: ["start end", "end start"]
            }
        )

        scroll(
            animate(".main-2 picture img", { y: [-50, 50] }), {
                target: document.querySelector(".main-2"),
                offset: ["start end", "end start"]
            }
        )
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
    <div class="main-1">
        <picture><img src="{aboutUsMain1Src}" alt="a group of people discussing something"><div class="frame"></div></picture>
        <p>With a rich family history and a dedication to excellence, we deliver our products through meticulous manufacturing processes. Every shutter we create is crafted with precision and care, ensuring both aesthetic appeal and long-term durability. Our team is committed to engaging closely with our customers, providing a highly personalized experience, whether we're working with homeowners, designers, or builders.</p>
    </div>
    <div class="main-2">
        <p>When you choose California Shutters Toronto, you're investing in premium window solutions that require minimal maintenance and offer lasting quality. Our products not only enhance the beauty and functionality of your space but are also backed by a 25-year warranty. Homeowners save time with the reliability of our products, while builders and designers benefit from our expertise in customization, ensuring accurate and professional results every time.</p>
        <picture><img src="{aboutUsMain2Src}" alt="a man and a woman discussing something"><div class="frame"></div></picture>
    </div>
</main>
<div class="box"></div>

<style>
    main {
        padding: var(--spacing);
        /* padding-top: 9.5rem; */
        padding-top: var(--main-padding-top);
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

    article > *, .main-1 > *, .main-2 > * {
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

    .main-1, .main-2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing);
        padding: var(--spacing);
        max-width: 1200px;
        margin: auto;
        align-items: center;
        justify-items: center;
        margin-block: var(--spacing);
    }

    .main-1 picture, .main-2 picture {
        position: relative;
    }

    .main-1 picture img {
        translate: 5% 5%;
    }
    
    .main-2 picture img {
        translate: -5% -5%;
    }

    @media (max-width: 700px) {
        .logos {
            flex-direction: column;
        }
    }
    
    @media (max-width: 1150px) {
        /* main {
            padding-top: 6.5rem;
        } */

        article {
            grid-template-columns: 1fr;
        }

        article h1 {
            order: -1;
        }
    }

    @media (max-width: 900px) {
        .main-1, .main-2 {
            grid-template-columns: 1fr;
            margin-block: 3rem;
        }

        .main-2 picture {
            order: -1;
        }

        .main-1 picture img {
            translate: -5% -5%;
        }

        .main-2 picture img {
            translate: 5% -5%;
        }
    }

</style>