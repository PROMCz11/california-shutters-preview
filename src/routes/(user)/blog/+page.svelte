<script>
    import articlePlaceholderSrc from "$lib/assets/blog/blog-article-placeholder.webp";
	import Cta from "$lib/components/Cta.svelte";

    let blogs = [
        {
            title: "Top 5 Shutter Types",
            intro: "Explore the top 5 shutters that bring both elegance and functionality to any home. These shutters are crafted with precision, offering durability, style, and customization to suit your taste. Perfect for adding a refined touch while enhancing privacy and light control, these selections represent the finest in modern window design.",
            date: "Jul, 21st 2023",
            imgSrc: articlePlaceholderSrc,
            imgDesc: "this is the description form the app"
            // ID or URL or whatever identifier we decide to use, this will be strapped to the href of the anchor element
        },
        {
            title: "Top 5 Shutter Types",
            intro: "Explore the top 5 shutters that bring both elegance and functionality to any home. These shutters are crafted with precision, offering durability, style, and customization to suit your taste. Perfect for adding a refined touch while enhancing privacy and light control, these selections represent the finest in modern window design.",
            date: "Jul, 21st 2023",
            imgSrc: articlePlaceholderSrc,
            imgDesc: "this is the description form the app"
        },
        {
            title: "Top 5 Shutter Types",
            intro: "Explore the top 5 shutters that bring both elegance and functionality to any home. These shutters are crafted with precision, offering durability, style, and customization to suit your taste. Perfect for adding a refined touch while enhancing privacy and light control, these selections represent the finest in modern window design.",
            date: "Jul, 21st 2023",
            imgSrc: articlePlaceholderSrc,
            imgDesc: "this is the description form the app"
        },
        {
            title: "Top 5 Shutter Types",
            intro: "Explore the top 5 shutters that bring both elegance and functionality to any home. These shutters are crafted with precision, offering durability, style, and customization to suit your taste. Perfect for adding a refined touch while enhancing privacy and light control, these selections represent the finest in modern window design.",
            date: "Jul, 21st 2023",
            imgSrc: articlePlaceholderSrc,
            imgDesc: "this is the description form the app"
        },
        {
            title: "Top 5 Shutter Types",
            intro: "Explore the top 5 shutters that bring both elegance and functionality to any home. These shutters are crafted with precision, offering durability, style, and customization to suit your taste. Perfect for adding a refined touch while enhancing privacy and light control, these selections represent the finest in modern window design.",
            date: "Jul, 21st 2023",
            imgSrc: articlePlaceholderSrc,
            imgDesc: "this is the description form the app"
        },
        {
            title: "Top 5 Shutter Types",
            intro: "Explore the top 5 shutters that bring both elegance and functionality to any home. These shutters are crafted with precision, offering durability, style, and customization to suit your taste. Perfect for adding a refined touch while enhancing privacy and light control, these selections represent the finest in modern window design.",
            date: "Jul, 21st 2023",
            imgSrc: articlePlaceholderSrc,
            imgDesc: "this is the description form the app"
        },
        {
            title: "Top 5 Shutter Types",
            intro: "Explore the top 5 shutters that bring both elegance and functionality to any home. These shutters are crafted with precision, offering durability, style, and customization to suit your taste. Perfect for adding a refined touch while enhancing privacy and light control, these selections represent the finest in modern window design.",
            date: "Jul, 21st 2023",
            imgSrc: articlePlaceholderSrc,
            imgDesc: "this is the description form the app"
        },
        {
            title: "Top 5 Shutter Types",
            intro: "Explore the top 5 shutters that bring both elegance and functionality to any home. These shutters are crafted with precision, offering durability, style, and customization to suit your taste. Perfect for adding a refined touch while enhancing privacy and light control, these selections represent the finest in modern window design.",
            date: "Jul, 21st 2023",
            imgSrc: articlePlaceholderSrc,
            imgDesc: "this is the description form the app"
        },
        {
            title: "Top 5 Shutter Types",
            intro: "Explore the top 5 shutters that bring both elegance and functionality to any home. These shutters are crafted with precision, offering durability, style, and customization to suit your taste. Perfect for adding a refined touch while enhancing privacy and light control, these selections represent the finest in modern window design.",
            date: "Jul, 21st 2023",
            imgSrc: articlePlaceholderSrc,
            imgDesc: "this is the description form the app"
        },
    ];
</script>

<main>
    <h1 class="bg-white text-navy">Explore Further</h1>
    <div class="blogs bg-white text-navy">
        {#each blogs as { title, intro, date, imgSrc, imgDesc }}
            <a href="/blog" class="blog text-navy">
                <picture><img src="{imgSrc}" alt="{imgDesc}"></picture>
                <p class="title fs-400">{title}</p>
                <p class="intro fs-300">{intro}</p>
                <p class="date fs-xs">{date}</p>
            </a>
        {/each}
    </div>
    <div class="load-more-wrapper bg-white">
        <button class="text-navy">+ Load more</button>
    </div>
    <Cta />
</main>

<style>
    main > h1 {
        padding-top: var(--main-padding-top);
        padding-bottom: calc(var(--main-padding-top) / 2);
        text-align: center;
        max-width: 1500px;
        margin: auto;
    }

    .blogs {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--spacing);
        padding: var(--spacing);
        max-width: 1500px;
        margin: auto;
    }

    .blog {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        text-decoration: none;
    }

    .blog .date {
        text-align: end;
    }

    .load-more-wrapper {
        padding-block: var(--spacing);
        padding-bottom: calc(var(--spacing) * 2);
        max-width: 1500px;
        margin: auto;
    }

    .load-more-wrapper button {
        display: block;
        margin: auto;
        border-radius: .5rem;
    }

    /* When the user requests more blogs and the server returns the last batch, it should also return a message indicating no more, which will update the state of the button, call it "canLoadMore = false" and it will also be returned on the initial page load */
    /* .load-more-wrapper button.disabled {
        color: #182D3816;
    } */

    .load-more-wrapper button:hover {
        background-color: #182D3814;
    }

    .load-more-wrapper button:active {
        background-color: #182D381A;
    }

    @media (max-width: 1150px) {
        .blogs {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
        .blogs {
            grid-template-columns: 1fr;
        }
    }
</style>