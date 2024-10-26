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

        const groupTitles = document.querySelectorAll(".group p");
        groupTitles.forEach(title => {
            scroll(
                animate(title, { y: [-100, 100] }), {
                    target: title
                }
            )
        })

        // Handling page loading
        const handleLoad = () => document.getElementById("loader").style.display = "none";
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }
    })
</script>

<main>
    <div>
        <div class="group">
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <p>Project 1</p>
        </div>
        <div class="group">
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <p>Project 2</p>
        </div>
        <h1 class="fs-heading">Explore the results of our work</h1>
    </div>
    <div>
        <div class="group">
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <p>Project 3</p>
        </div>
        <div class="group">
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <p>Project 4</p>
        </div>
        <h1 class="fs-heading">Explore the results of our work</h1>
    </div>
    <div>
        <div class="group">
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <p>Project 5</p>
        </div>
        <div class="group">
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <picture><img src="{galleryImg1Src}" alt="shutter"></picture>
            <p>Project 6</p>
        </div>
        <h1 class="fs-heading">Explore the results of our work</h1>
    </div>
    <div class="box"></div>
</main>
<div id="loader">
    Loading... 
</div>

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

    .group:first-of-type {
        margin-left: auto;
    }

    .group:last-of-type {
        margin-right: auto;
    }

    .group {
        position: relative;
        min-height: 180px;
        min-width: 120px;
        transition: all 150ms ease-in-out;
        cursor: pointer;
    }

    .group:hover {
        scale: 0.95;
    }

    .group picture {
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        transition: all 150ms ease-in-out;
    }

    .group p {
        position: absolute;
        top: 80%;
        left: 50%;
        translate: -50% -50%;
    }

    .group picture:nth-of-type(3) {
        translate: -60% -60%;
    }

    .group picture:nth-of-type(2) {
        translate: -30% -65%;
    }

    .group picture:nth-of-type(1) {
        translate: -40% -40%;
    }

    .group:hover picture:nth-of-type(3) {
        translate: -65% -65%;
    }

    .group:hover picture:nth-of-type(2) {
        translate: -25% -70%;
    }

    .group:hover picture:nth-of-type(1) {
        translate: -35% -35%;
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
        
        .group {
            min-height: 300px;
            min-width: 200px;
        }
    }
    
    @media (min-width: 1024px) {
        picture {
            width: 260px;
        }

        .group {
            min-height: 500px;
            min-width: 260px;
        }
    }
</style>