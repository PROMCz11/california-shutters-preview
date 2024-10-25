<script>
    const placeholderImgSrc = "https://placehold.co/320x250";
    import heroImg1Src from "$lib/assets/home/IMG_3573.jpg";
    import heroImg2Src from "$lib/assets/home/IMG_3725.jpg";
    import heroImg3Src from "$lib/assets/home/IMG_4027.jpg";
    import heroImg4Src from "$lib/assets/home/IMG_4078.jpg";
    import heroImg5Src from "$lib/assets/home/IMG_4396.jpg";
    import heroImg6Src from "$lib/assets/home/IMG_4539.jpg";
    import heroImg7Src from "$lib/assets/home/IMG_4575 3.jpg";
    import heroImg8Src from "$lib/assets/home/IMG_4577.jpg";
    import { animate, inView } from "motion";
	import { onMount } from "svelte";

    onMount(() => {
        const collageImgs = document.querySelectorAll(".collage img, .background-collage img");

        inView(collageImgs, ({ target }) => {
            animate(target, { scale: 1, opacity: 1, y: ["70%", 0] }, {
                duration: .750
            });
        }, { margin: "-300px 0px" })
    })
</script>

<main>
    <article class="hero">
        <h1 class="fs-xl">Redefining the California Shutter</h1>
        <div class="background-collage">
            <div class="shift">
                <img src="{heroImg1Src}" alt="placeholder">
                <img src="{heroImg2Src}" alt="placeholder">
            </div>
            <div class="shift shift-alternate">
                <img src="{heroImg3Src}" alt="placeholder">
                <img src="{heroImg4Src}" alt="placeholder">
            </div>
        </div>
    </article>
    <div class="collage">
        <div class="shift">
            <img src="{heroImg5Src}" alt="placeholder">
            <img src="{heroImg6Src}" alt="placeholder">
        </div>
        <div class="shift shift-alternate">
            <img src="{heroImg7Src}" alt="placeholder">
            <img src="{heroImg8Src}" alt="placeholder">
        </div>
        <div class="shift">
            <img src="{placeholderImgSrc}" alt="placeholder">
            <img src="{placeholderImgSrc}" alt="placeholder">
        </div>
    </div>
</main>

<style>
    main * {
        /* border: 1px solid limegreen; */
    }

    .hero {
        position: sticky;
        top: 0;
        min-height: 100vh;
        min-height: 100svh;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
        position: relative;
    }

    .hero .background-collage {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10rem;
        justify-content: center;
        padding-top: 50rem;
        z-index: -1;
    }

    .hero h1 {
        letter-spacing: 3px;
    }

    .collage {
        display: flex;
        flex-direction: column;
        gap: 10rem;
        padding-block: 10rem;
        align-items: center;
    }

    .shift {
        display: flex;
        gap: 1rem;
        justify-content: space-between;
        width: 70vw;
        translate: 10% 0;
    }

    .shift-alternate {
        translate: -10% 0;
    }

    .collage img, .background-collage img {
        opacity: 0;
        max-width: 320px;
    }

    @media (max-width: 1000px) {
        img {
            max-width: 200px;
        }
    }

    @media (max-width: 650px) {
        img {
            max-width: 120px;
        }
    }
</style>