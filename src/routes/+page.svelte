<script>
    import heroImg1Src from "$lib/assets/home/IMG_3573.webp";
    import heroImg2Src from "$lib/assets/home/IMG_3725.webp";
    import heroImg3Src from "$lib/assets/home/IMG_4027.webp";
    import heroImg4Src from "$lib/assets/home/IMG_4078.webp";
    import heroImg5Src from "$lib/assets/home/IMG_4396.webp";
    import heroImg6Src from "$lib/assets/home/IMG_4539.webp";
    import heroImg7Src from "$lib/assets/home/IMG_4575 3.webp";
    import heroImg8Src from "$lib/assets/home/IMG_4577.webp";
    import heroImg9Src from "$lib/assets/home/IMG_4079.webp";
    import heroImg10Src from "$lib/assets/home/IMG_4542.webp";

    import gearSrc from "$lib/assets/home/gear.svg";
    import qualitySrc from "$lib/assets/home/quality.svg";
    import piggybankSrc from "$lib/assets/home/piggybank.svg";

    import canadianHardwoodSrc from "$lib/assets/home/canadian-hardwood.png"
    import noCompositeSrc from "$lib/assets/home/no-composite.png"
    import premiumPoplarSrc from "$lib/assets/home/premium-poplar.png"
    import straightShutterSrc from "$lib/assets/home/straight-shutter.png"
    import mainIcon1Src from "$lib/assets/home/main-icon-1.svg";
    import mainIcon2Src from "$lib/assets/home/main-icon-2.svg";
    import mainIcon3Src from "$lib/assets/home/main-icon-3.svg";
    import mainIcon4Src from "$lib/assets/home/main-icon-4.svg";
    
    import { animate, scroll, inView, timeline } from "motion";
	import { onMount } from "svelte";

    onMount(() => {
        const collageImgs = document.querySelectorAll(".background-collage picture");
        const heroContent = document.querySelector(".content");
        const articleElement = document.querySelector("article");
        inView(collageImgs, ({ target }) => {
            animate(target, { opacity: [0, 1], y: ["70%", 0] }, {
                margin: "-350px 0",
                duration: .750
            })
        })

        scroll(
            animate(heroContent, { y: [0, "-100%"], display: "none" }), { target: articleElement, offset: ["0% 0%", "100% 30%"] }
        )

        scroll(
            animate(heroContent, { opacity: [1, 0] }), { target: articleElement, offset: ["50% 0%", "100% 30%"] }
        )
    })
</script>

<main>
    <article class="hero">
        <div class="content">
            <div>
                <h1 class="fs-heading">Redefining the California Shutter</h1>
                <p class="fs-400 sub-heading">With Victorian styled crown molding built into the front-side faces, this Toronto inspired window shutter was made to turn heads.</p>
            </div>
            <div>
                <a href="/"><button class="bg-yellow">GET FREE QUOTE NOW!</button></a>
                <p class="fs-xs">Thousands of delighted customers over 25 years!</p>
            </div>
        </div>
        <div class="background-collage">
            <div class="shift">
                <picture>
                    <img src="{heroImg1Src}" alt="background shutter">
                </picture>
                <picture>
                    <img src="{heroImg2Src}" alt="background shutter">
                </picture>
            </div>
            <div class="reverse-shift">
                <picture>
                    <img src="{heroImg3Src}" alt="background shutter">
                </picture>
                <picture>
                    <img src="{heroImg4Src}" alt="background shutter">
                </picture>
            </div>
            <div class="shift">
                <picture>
                    <img src="{heroImg5Src}" alt="background shutter">
                </picture>
                <picture>
                    <img src="{heroImg6Src}" alt="background shutter">
                </picture>
            </div>
            <div class="reverse-shift">
                <picture>
                    <img src="{heroImg7Src}" alt="background shutter">
                </picture>
                <picture>
                    <img src="{heroImg8Src}" alt="background shutter">
                </picture>
            </div>
            <div class="shift">
                <picture>
                    <img src="{heroImg9Src}" alt="background shutter">
                </picture>
                <picture>
                    <img src="{heroImg10Src}" alt="background shutter">
                </picture>
            </div>
        </div>
        <div class="note fs-300">
            <p>We <span class="text-yellow">only</span> do repairs for <span class="text-yellow">our</span> customers</p>
        </div>
    </article>
    <section class="general-benefits bg-white text-navy fs-300">
        <div>
            <div>
                <img src="{gearSrc}" alt="gear icon">
                <div>
                    <h2>Excellent Service</h2>
                    <p>We're ready to meet all of your California Shutter needs!</p>
                </div>
            </div>
            <div>
                <img src="{qualitySrc}" alt="quality icon">
                <div>
                    <h2>Record-Breaking Quality</h2>
                    <p>We have the highest quality California Shutter in Toronto!<br>Check out our reviews!</p>
                </div>
            </div>
            <div>
                <img src="{piggybankSrc}" alt="piggybank icon">
                <div>
                    <h2>Exceptional Prices</h2>
                    <p>We offer competitive pricing for the top quality California shutters in Toronto</p>
                </div>
            </div>
        </div>
        <h1 class="fs-heading">Three Reasons Why We're the Best</h1>
    </section>
    <section class="main-features">
        
    </section>
    <div class="box"></div>
</main>

<style>
    .box {
        min-height: 200vh;
    }

    .hero {
        max-width: 100vw;
        overflow: hidden;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        text-align: center;
        position: fixed;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        width: 100%;
    }

    .content h1 {
        padding-inline: 2rem;
    }

    .content > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }

    .sub-heading {
        max-width: 70%;
    }

    .content a {
        font-weight: 600;
    }

    .background-collage {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10rem;
        z-index: -1;
    }

    .background-collage picture {
        max-width: 320px;
        opacity: 0;
    }

    .background-collage > div {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 90vw;
    }

    .background-collage > .shift {
        translate: 10% 0;
    }

    .background-collage > .reverse-shift {
        translate: -10% 0;
    }

    .note {
        font-weight: 600;
        text-align: center;
        padding-block: 1rem;
    }

    .general-benefits > div {
        padding: 3rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 3rem;
    }

    .general-benefits > div > div {
        max-width: 350px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        text-align: center;
        padding-block: var(--spacing);
    }

    .general-benefits > h1 {
        padding-inline: 2rem;
        padding-bottom: var(--spacing);
        padding-top: calc(var(--spacing) * 5);
        text-align: center;
    }

    @media (max-width: 900px) {
        .background-collage picture {
            max-width: 200px;
        }
    }

    @media (max-width: 500px) {
        .background-collage picture {
            max-width: 130px;
        }
    }
</style>