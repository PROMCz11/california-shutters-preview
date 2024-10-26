<script>
    import galleryImg1Src from "$lib/assets/gallery/IMG_4576.webp"
    import galleryImg2Src from "$lib/assets/gallery/IMG_4628.webp"
    import galleryImg3Src from "$lib/assets/gallery/IMG_4632.webp"
    import galleryImg4Src from "$lib/assets/gallery/IMG_4634.webp"
    import galleryImg5Src from "$lib/assets/gallery/IMG_4644.webp"
    import { animate, scroll } from "motion"
	import { onMount } from "svelte";

    onMount(() => {
        const headings = document.querySelectorAll("main > div h1");
        headings.forEach(heading => {
            scroll(
                animate(heading, { y: [-400, 400] }), {
                    target: heading
                }
            )
        })

        // const pictureGroups = document.querySelectorAll("main > div picture");
        // pictureGroups.forEach(picture => {
        //     scroll(
        //         animate(picture, { y: [-100, 100] }), {
        //             target: picture
        //         }
        //     )
        // })
    })
</script>

<main>
    <div>
        <picture>
            <img src="{galleryImg1Src}" alt="shutter">
        </picture>
        <picture>
            <img src="{galleryImg2Src}" alt="shutter">
        </picture>
        <h1 class="fs-heading">Explore the results of our work</h1>
    </div>
    <div>
        <picture>
            <img src="{galleryImg1Src}" alt="shutter">
        </picture>
        <picture>
            <img src="{galleryImg2Src}" alt="shutter">
        </picture>
        <h1 class="fs-heading">Experience what our shutters feel like</h1>
    </div>
    <div>
        <picture>
            <img src="{galleryImg1Src}" alt="shutter">
        </picture>
        <picture>
            <img src="{galleryImg2Src}" alt="shutter">
        </picture>
        <h1 class="fs-heading">Your doors and windows are in good hands</h1>
    </div>
    <div class="box"></div>
</main>

<style>
    main {
        padding: 10vw;
        padding-top: 20rem;
    }

    main > div {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: var(--spacing);
    }

    main > div picture:first-of-type {
        margin-left: auto;
    }

    main > div picture:last-of-type {
        margin-right: auto;
    }

    h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        width: 100%;
        text-align: center;
    }

    picture {
        width: 120px;
    }

    @media (min-width: 768px) {
        picture {
            width: 200px;
        }
    }
    
    @media (min-width: 1024px) {
        picture {
            width: 320px;
        }
    }
</style>