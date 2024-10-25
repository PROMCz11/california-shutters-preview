<script>
    import heroImg1Src from "$lib/assets/home/IMG_3573.jpg";
    import heroImg2Src from "$lib/assets/home/IMG_3725.jpg";
    import heroImg3Src from "$lib/assets/home/IMG_4027.jpg";
    import heroImg4Src from "$lib/assets/home/IMG_4078.jpg";
    import heroImg5Src from "$lib/assets/home/IMG_4396.jpg";
    import heroImg6Src from "$lib/assets/home/IMG_4539.jpg";
    import heroImg7Src from "$lib/assets/home/IMG_4575 3.jpg";
    import heroImg8Src from "$lib/assets/home/IMG_4577.jpg";

    import { animate, scroll, inView } from "motion";
	import { onMount } from "svelte";

    onMount(() => {
        const collageImgs = document.querySelectorAll(".background-collage img");
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
                <img src="{heroImg1Src}" alt="background img of a shutter">
                <img src="{heroImg2Src}" alt="background img of a shutter">
            </div>
            <div class="reverse-shift">
                <img src="{heroImg3Src}" alt="background img of a shutter">
                <img src="{heroImg4Src}" alt="background img of a shutter">
            </div>
            <div class="shift">
                <img src="{heroImg5Src}" alt="background img of a shutter">
                <img src="{heroImg6Src}" alt="background img of a shutter">
            </div>
            <div class="reverse-shift">
                <img src="{heroImg7Src}" alt="background img of a shutter">
                <img src="{heroImg8Src}" alt="background img of a shutter">
            </div>
        </div>
        <div class="note fs-300">
            <p>We <span class="text-yellow">only</span> do repairs for <span class="text-yellow">our</span> customers</p>
        </div>
    </article>
    <div class="box"></div>
</main>

<style>
    .box {
        min-height: 200vh;
        background-color: var(--clr-white);
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

    .background-collage img {
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

    @media (max-width: 900px) {
        .background-collage img {
            max-width: 200px;
        }
    }

    @media (max-width: 500px) {
        .background-collage img {
            max-width: 130px;
        }
    }
</style>