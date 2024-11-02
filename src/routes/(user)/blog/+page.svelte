<script>
    import articlePlaceholderSrc from "$lib/assets/blog/blog-article-placeholder.webp";
</script>

<main>
    <h1>Explore Further</h1>
    <div class="blogs bg-white text-navy">
        <a href="/blog" class="blog text-navy">
            <picture><img src="{articlePlaceholderSrc}" alt="this is the description form the app"></picture>
            <p class="title fs-400">Top 5 Shutter Types</p>
            <p class="intro fs-300">Explore the top 5 shutters that bring both elegance and functionality to any home. These shutters are crafted with precision, offering durability, style, and customization to suit your taste. Perfect for adding a refined touch while enhancing privacy and light control, these selections represent the finest in modern window design.</p>
            <p class="date fs-xs">Jul, 21st 2023</p>
        </a>
        <a href="/blog" class="blog text-navy">
            <picture><img src="{articlePlaceholderSrc}" alt="this is the description form the app"></picture>
            <p class="title fs-400">Top 5 Shutter Types</p>
            <p class="intro fs-300">Explore the top 5 shutters that bring both elegance and functionality to any home. These shutters are crafted with precision, offering durability, style, and customization to suit your taste. Perfect for adding a refined touch while enhancing privacy and light control, these selections represent the finest in modern window design.</p>
            <p class="date fs-xs">Jul, 21st 2023</p>
        </a>
        <a href="/blog" class="blog text-navy">
            <picture><img src="{articlePlaceholderSrc}" alt="this is the description form the app"></picture>
            <p class="title fs-400">Top 5 Shutter Types</p>
            <p class="intro fs-300">Explore the top 5 shutters that bring both elegance and functionality to any home. These shutters are crafted with precision, offering durability, style, and customization to suit your taste. Perfect for adding a refined touch while enhancing privacy and light control, these selections represent the finest in modern window design.</p>
            <p class="date fs-xs">Jul, 21st 2023</p>
        </a>
        <a href="/blog" class="blog text-navy">
            <picture><img src="{articlePlaceholderSrc}" alt="this is the description form the app"></picture>
            <p class="title fs-400">Top 5 Shutter Types</p>
            <p class="intro fs-300">Explore the top 5 shutters that bring both elegance and functionality to any home. These shutters are crafted with precision, offering durability, style, and customization to suit your taste. Perfect for adding a refined touch while enhancing privacy and light control, these selections represent the finest in modern window design.</p>
            <p class="date fs-xs">Jul, 21st 2023</p>
        </a>
        <a href="/blog" class="blog text-navy">
            <picture><img src="{articlePlaceholderSrc}" alt="this is the description form the app"></picture>
            <p class="title fs-400">Top 5 Shutter Types</p>
            <p class="intro fs-300">Explore the top 5 shutters that bring both elegance and functionality to any home. These shutters are crafted with precision, offering durability, style, and customization to suit your taste. Perfect for adding a refined touch while enhancing privacy and light control, these selections represent the finest in modern window design.</p>
            <p class="date fs-xs">Jul, 21st 2023</p>
        </a>
        <a href="/blog" class="blog text-navy">
            <picture><img src="{articlePlaceholderSrc}" alt="this is the description form the app"></picture>
            <p class="title fs-400">Top 5 Shutter Types</p>
            <p class="intro fs-300">Explore the top 5 shutters that bring both elegance and functionality to any home. These shutters are crafted with precision, offering durability, style, and customization to suit your taste. Perfect for adding a refined touch while enhancing privacy and light control, these selections represent the finest in modern window design.</p>
            <p class="date fs-xs">Jul, 21st 2023</p>
        </a>
    </div>
    <div class="load-more-wrapper bg-white">
        <button class="text-navy">+ Load more</button>
    </div>
    <div class="box"></div>
</main>

<style>
    main {
        padding-top: var(--main-padding-top);
    }

    main > h1 {
        margin-bottom: calc(var(--main-padding-top) / 2);
        text-align: center;
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
        max-width: 1500px;
        margin: auto;
    }

    .load-more-wrapper button {
        display: block;
        margin: auto;
    }

    .load-more-wrapper button.disabled {
        /* color: ; */
    }

    .load-more-wrapper button:hover {
        /* background-color: ; */
    }

    .load-more-wrapper button:active {
        /* background-color: ; */
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