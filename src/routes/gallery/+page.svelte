<script>
    import gallery_1_1Src from "$lib/assets/gallery/gallery1.1.webp"
    import gallery_1_2Src from "$lib/assets/gallery/gallery1.2.webp"
    import gallery_1_3Src from "$lib/assets/gallery/gallery1.3.webp"
    import gallery_1_4Src from "$lib/assets/gallery/gallery1.4.webp"
    import { animate, scroll } from "motion"
	import { onMount } from "svelte";

    onMount(() => {
        const headings = document.querySelectorAll("main > div h2");
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
    <h1 class="fs-heading">Our Gallery</h1>
    <div>
        <div class="group">
            <picture><img src="{gallery_1_2Src}" alt="shutter"></picture>
            <picture><img src="{gallery_1_3Src}" alt="shutter"></picture>
            <picture><img src="{gallery_1_4Src}" alt="shutter"></picture>
            <picture><img src="{gallery_1_1Src}" alt="shutter"></picture>
            <p>Project 1</p>
        </div>
        <div class="group">
            <picture><img src="{gallery_1_2Src}" alt="shutter"></picture>
            <picture><img src="{gallery_1_3Src}" alt="shutter"></picture>
            <picture><img src="{gallery_1_4Src}" alt="shutter"></picture>
            <picture><img src="{gallery_1_1Src}" alt="shutter"></picture>
            <p>Project 2</p>
        </div>
        <h2 class="fs-xl">Explore the results of our work</h2>
    </div>
    <div>
        <div class="group">
            <picture><img src="{gallery_1_2Src}" alt="shutter"></picture>
            <picture><img src="{gallery_1_3Src}" alt="shutter"></picture>
            <picture><img src="{gallery_1_4Src}" alt="shutter"></picture>
            <picture><img src="{gallery_1_1Src}" alt="shutter"></picture>
            <p>Project 3</p>
        </div>
        <div class="group">
            <picture><img src="{gallery_1_2Src}" alt="shutter"></picture>
            <picture><img src="{gallery_1_3Src}" alt="shutter"></picture>
            <picture><img src="{gallery_1_4Src}" alt="shutter"></picture>
            <picture><img src="{gallery_1_1Src}" alt="shutter"></picture>
            <p>Project 4</p>
        </div>
        <h2 class="fs-xl">Experience what our shutters feel like</h2>
    </div>
    <div>
        <div class="group">
            <picture><img src="{gallery_1_2Src}" alt="shutter"></picture>
            <picture><img src="{gallery_1_3Src}" alt="shutter"></picture>
            <picture><img src="{gallery_1_4Src}" alt="shutter"></picture>
            <picture><img src="{gallery_1_1Src}" alt="shutter"></picture>
            <p>Project 5</p>
        </div>
        <div class="group">
            <picture><img src="{gallery_1_2Src}" alt="shutter"></picture>
            <picture><img src="{gallery_1_3Src}" alt="shutter"></picture>
            <picture><img src="{gallery_1_4Src}" alt="shutter"></picture>
            <picture><img src="{gallery_1_1Src}" alt="shutter"></picture>
            <p>Project 6</p>
        </div>
        <h2 class="fs-xl">Your doors and windows are in good hands</h2>
    </div>
    <div class="box"></div>
</main>
<div id="loader">
    Loading... 
</div>

<style>
    main {
        padding: 10vw;
        /* padding-top: 10rem; */
    }

    main > h1 {
        padding: var(--spacing);
        padding-block: 10rem;
        text-align: center;
    }

    main > div {
        position: relative;
        display: flex;
        flex-direction: column;
        margin-bottom: 8rem;
        gap: 8rem;
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

    h2 {
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

        main > div {
            margin-bottom: 5rem;
            gap: 5rem;
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

        main > div {
            margin-bottom: var(--spacing);
            gap: var(--spacing);
        }
    }
</style>