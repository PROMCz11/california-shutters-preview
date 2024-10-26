<script>
    // import testimonialSrc from "$lib/assets/testimonial.png";
    let testimonialSrc;
	import { onMount } from "svelte";
    let boxes = [{num: 1, content: "Box one"}, {num: 2, content: "Box two"}, {num: 3, content: "Box three"}, {num: 4, content: "Box four"}, {num: 5, content: "Box five"}];

    const navigateRight = () => {
        let nums = boxes.map(box => box.num);
        let shiftedNums = [nums[nums.length - 1], ...nums.slice(0, nums.length - 1)];
        boxes = boxes.map((box, index) => ({ ...box, num: shiftedNums[index] }));
    }

    const navigateLeft = () => {
        let nums = boxes.map(box => box.num);
        let shiftedNums = [...nums.slice(1), nums[0]];
        boxes = boxes.map((box, index) => ({ ...box, num: shiftedNums[index] }));
    }

    onMount(() => {
        document.querySelector(".boxes").addEventListener("click", e => {
            if(e.target.classList.contains("box-2") || e.target.parentElement.classList.contains("box-2") || e.target.parentElement.parentElement.classList.contains("box-2")) {
                navigateLeft();
            }

            if(e.target.classList.contains("box-4") || e.target.parentElement.classList.contains("box-4") || e.target.parentElement.parentElement.classList.contains("box-4")) {
                navigateRight();
            }
        })
    });

</script>

<main>
    <div class="boxes">
        {#each boxes as { num, content }}
            <div class="box box-{num}">
                {content}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis fuga voluptatum harum corporis vitae veritatis, omnis neque optio culpa consequuntur corrupti, nesciunt architecto deleniti, esse velit repudiandae voluptates! Illum, distinctio?</p>
                <img src="{testimonialSrc}" alt="">
            </div>
        {/each}
    </div>
    <!-- <div class="buttons">
        <button on:click={navigateLeft}>Left</button>
        <button on:click={navigateRight}>Right</button>
    </div> -->
</main>

<style>
    main {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 100vw;
        overflow-x: hidden;
    }

    .boxes {
        width: 100%;
        text-align: center;
        position: relative;
        min-height: 50vh;
    }

    .box {
        display: flex;
        /* flex-direction: column; */
        justify-content: center;
        align-items: center;
        gap: 2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        width: 800px;
        height: 600px;
        background-color: #182D38;
        color: white;
        font-size: 1rem;
        transition: all 750ms ease-in-out;
        padding: 2rem;
        text-align: left;
    }

    .box > p {
        font-size: .8rem;
    }

    .box-1 {
        translate: -270% -50%;
        opacity: 0;
    }

    .box-2 {
        translate: -160% -50%;
        opacity: .5;
    }

    .box-3 {
        scale: 1.1;
    }

    .box-4 {
        translate: 60% -50%;
        opacity: .5;
    }

    .box-5 {
        translate: 170% -50%;
        opacity: 0;
    }

    /* .buttons {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 2rem;
        position: fixed;
    } */
</style>