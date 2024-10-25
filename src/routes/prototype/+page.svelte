<script>
    // import main1Src from "$lib/assets/main-1.png";
    // import mainIcon1Src from "$lib/assets/main-icon-1.svg";
    // import mainIcon2Src from "$lib/assets/main-icon-2.svg";
    // import mainIcon3Src from "$lib/assets/main-icon-3.svg";
    // import mainIcon4Src from "$lib/assets/main-icon-4.svg";

    let main1Src, mainIcon1Src, mainIcon2Src, mainIcon3Src, mainIcon4Src;
    import { timeline, scroll } from "motion";
	import { onMount } from "svelte";

    onMount(() => {
        scroll(
            timeline([
                "one",
                [".content > div > div > div", { translateY: ["40%", "15%"] }, { easing: "linear" }],
                [".content > div > div > div > div:nth-of-type(1)", { opacity: [1, .2] }, { at: "one" }],
                [".content > div > div > div > div:nth-of-type(2)", { opacity: [.2, 1] }, { at: "one" }],
                [".content > div > div > div > div:nth-of-type(3)", { opacity: [0, .2] }, { at: "one" }],
                [".content > div > div > div > div:nth-of-type(4)", { opacity: [0, 0] }, { at: "one" }],
                "two",
                [".content > div > div > div", { translateY: ["15%", "-10%"] }, { easing: "linear" }],
                [".content > div > div > div > div:nth-of-type(1)", { opacity: [.2, 0] }, { at: "two" }],
                [".content > div > div > div > div:nth-of-type(2)", { opacity: [1, .2] }, { at: "two" }],
                [".content > div > div > div > div:nth-of-type(3)", { opacity: [.2, 1] }, { at: "two" }],
                [".content > div > div > div > div:nth-of-type(4)", { opacity: [0, .2] }, { at: "two" }],
                "three",
                [".content > div > div > div", { translateY: ["-10%", "-35%"] }, { easing: "linear" }],
                [".content > div > div > div > div:nth-of-type(1)", { opacity: [0, 0] }, { at: "three" }],
                [".content > div > div > div > div:nth-of-type(2)", { opacity: [.2, 0] }, { at: "three" }],
                [".content > div > div > div > div:nth-of-type(3)", { opacity: [1, .2] }, { at: "three" }],
                [".content > div > div > div > div:nth-of-type(4)", { opacity: [.2, 1] }, { at: "three" }]
            ]),
            { target: document.querySelector(".content"), offset: ["start start", "end end"] }
        )
    });
</script>

<main>
    <div class="filler"></div>
    <div class="filler"></div>

    <div class="content">
        <div>
            <p>Constructed with Premium Canadian Poplar</p>
            <div>
                <div>
                    <div>
                        <img src="{mainIcon1Src}" alt="">
                        <p>All our California and plantation shutters are made with the best Canadian hardwoods on today's market.</p>
                    </div>
                    <div>
                        <img src="{mainIcon3Src}" alt="">
                        <p>We do not use composite or makeshift woods to construct even our lowest tier product.</p>
                    </div>
                    <div>
                        <img src="{mainIcon2Src}" alt="">
                        <p>Premium Canadian poplar is cut from the straightest pieces of wood that one can obtain from wood mills across Ontario.</p>
                    </div>
                    <div>
                        <img src="{mainIcon4Src}" alt="">
                        <p>This ensures straight shutter louvers and an excellent closure.</p>
                    </div>
                </div>
                <img src="{main1Src}" alt="">
            </div>
        </div>
    </div>

    <div class="filler"></div>
    <div class="filler"></div>
    <div class="filler"></div>
</main>

<style>
    main {
        min-height: 100vh;
        min-height: 100svh;
    }

    .filler {
        min-height: 50vh;
    }

    .content {
        background-color: #182D38;
        color: white;
        min-height: 400vh;
    }

    .content > div {
        position: sticky;
        top: 0;
        padding-block: 5rem;
    }

    .content > div > p {
        text-align: center;
        font-size: 3rem;
    }

    .content > div > div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        padding: 2rem;
        justify-items: center;
        align-items: center;
    }

    .content > div > div > div {
        display: flex;
        flex-direction: column;
        /* gap: 1rem; */
        /* translate: 0 50%;
        translate: 0 -50%; */
        /* translate: 0 40%;
        translate: 0 15%;
        translate: 0 -10%;
        translate: 0 -35%; */
    }

    .content > div > div > div > div {
        display: flex;
        align-items: center;
        gap: .5rem;

        height: 100px;
    }
</style>