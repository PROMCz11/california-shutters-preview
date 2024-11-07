<script>
    import gallery_1_1Src from "$lib/assets/gallery/gallery1.1.webp"
    import gallery_1_2Src from "$lib/assets/gallery/gallery1.2.webp"
    import gallery_1_3Src from "$lib/assets/gallery/gallery1.3.webp"
    import gallery_1_4Src from "$lib/assets/gallery/gallery1.4.webp"
    import { animate, scroll } from "motion"
	import { onMount } from "svelte";
    import Loader from "$lib/components/Loader.svelte";

    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';

    import { fade } from "svelte/transition"

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
    })

    let projects = [
        {
            projectName: "Project 1",
            images: [
                {src: gallery_1_1Src, alt: "shutte"},
                {src: gallery_1_2Src, alt: "shutte"},
                {src: gallery_1_3Src, alt: "shutte"},
                {src: gallery_1_4Src, alt: "shutte"},
            ]
        },
        {
            projectName: "Project 2",
            images: [
                {src: gallery_1_1Src, alt: "shutte"},
                {src: gallery_1_2Src, alt: "shutte"},
                {src: gallery_1_3Src, alt: "shutte"},
                {src: gallery_1_4Src, alt: "shutte"},
            ]
        },
        {
            projectName: "Project 3",
            images: [
                {src: gallery_1_1Src, alt: "shutte"},
                {src: gallery_1_2Src, alt: "shutte"},
                {src: gallery_1_3Src, alt: "shutte"},
                {src: gallery_1_4Src, alt: "shutte"},
            ]
        },
        {
            projectName: "Project 4",
            images: [
                {src: gallery_1_1Src, alt: "shutte"},
                {src: gallery_1_2Src, alt: "shutte"},
                {src: gallery_1_3Src, alt: "shutte"},
                {src: gallery_1_4Src, alt: "shutte"},
            ]
        },
        {
            projectName: "Project 5",
            images: [
                {src: gallery_1_1Src, alt: "shutte"},
                {src: gallery_1_2Src, alt: "shutte"},
                {src: gallery_1_3Src, alt: "shutte"},
                {src: gallery_1_4Src, alt: "shutte"},
            ]
        },
        {
            projectName: "Project 6",
            images: [
                {src: gallery_1_1Src, alt: "shutte"},
                {src: gallery_1_2Src, alt: "shutte"},
                {src: gallery_1_3Src, alt: "shutte"},
                {src: gallery_1_4Src, alt: "shutte"},
            ]
        },
    ];

    let selectedProject = 0;

    const openProject = (projectIndex) => {
        selectedProject = projects[projectIndex];
    }

    const closeProject = () => selectedProject = 0;
</script>

<main>
    <h1 class="fs-heading">Our Gallery</h1>
    <div>
        <button class="group" on:click={() => openProject(0)}>
            {#each projects[0].images as { src, alt }}
                <picture><img src="{src}" alt="{alt}"></picture>
            {/each}
            <p>{projects[0].projectName}</p>
        </button>
        <button class="group" on:click={() => openProject(1)}>
            {#each projects[1].images as { src, alt }}
                <picture><img src="{src}" alt="{alt}"></picture>
            {/each}
            <p>{projects[1].projectName}</p>
        </button>
        <h2 class="fs-xl">Explore the results of our work</h2>
    </div>
    <div>
        <button class="group" on:click={() => openProject(2)}>
            {#each projects[2].images as { src, alt }}
                <picture><img src="{src}" alt="{alt}"></picture>
            {/each}
            <p>{projects[2].projectName}</p>
        </button>
        <button class="group" on:click={() => openProject(3)}>
            {#each projects[3].images as { src, alt }}
                <picture><img src="{src}" alt="{alt}"></picture>
            {/each}
            <p>{projects[3].projectName}</p>
        </button>
        <h2 class="fs-xl">Experience what our shutters feel like</h2>
    </div>
    <div>
        <button class="group" on:click={() => openProject(4)}>
            {#each projects[4].images as { src, alt }}
                <picture><img src="{src}" alt="{alt}"></picture>
            {/each}
            <p>{projects[4].projectName}</p>
        </button>
        <button class="group" on:click={() => openProject(5)}>
            {#each projects[5].images as { src, alt }}
                <picture><img src="{src}" alt="{alt}"></picture>
            {/each}
            <p>{projects[5].projectName}</p>
        </button>
        <h2 class="fs-xl">Your doors and windows are in good hands</h2>
    </div>
    <div class="cta">
        <h3 class="fs-xl">It's time to take action</h3>
        <p>Use our price calculator and get your FREE quote now</p>
        <a href="/" class="bg-yellow text-navy">Get Started</a>
    </div>
</main>
{#if selectedProject}
    <button transition:fade={{duration: 150}} class="slider-wrapper" on:click={e => {
        if(e.target.classList.contains("slider-wrapper")) {
            closeProject();
        }
    }}>
        <div class="slider">
            <p class="fs-500">{selectedProject.projectName}</p>
            <Splide options={ { rewind: true, width: 1200 } } aria-label="testimonials">
                {#each selectedProject.images as { src, alt }}
                    <SplideSlide>
                        <picture><img src="{src}" alt="{alt}"></picture>
                    </SplideSlide>
                {/each}
            </Splide>
        </div>
    </button>
{/if}
<!-- <Loader /> -->

<style>
    main {
        padding: 10vw;
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
        transition: all 250ms ease;
        cursor: pointer;
    }

    .group:hover {
        scale: 1.1;
    }

    .group picture {
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        transition: all 250ms ease;
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
        max-width: max-content;
    }

    .group picture {
        width: 120px;
    }

    .slider {
        max-width: 1200px;
        margin: auto;
    }

    .slider > p {
        margin-bottom: 1rem;
    }

    .slider picture {
        width: 40%;
        max-width: 350px;
        margin: auto;
    }

    .slider-wrapper {
        position: fixed;
        inset: 0;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(11, 23, 29, 0.9);
        text-align: center;
    }

    button {
        padding: 0;
        color: var(--clr-white);
    }

    @media (min-width: 768px) {
        .group picture {
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

    .cta {
        min-height: 50vh;
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
    }
    
    @media (min-width: 1024px) {
        .group picture {
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