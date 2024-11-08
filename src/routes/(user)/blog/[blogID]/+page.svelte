<script>
    import { page } from "$app/stores";
    import Cta from "$lib/components/Cta.svelte";

    import blogPlaceholderSrc from "$lib/assets/blog/blog-article-placeholder.webp";

    // let blogID = $page.params.blogID; // This will be on the +page.js file

    export let data;
    const { blog, recentBlogs } = data;

    // const recentBlogs = [
    //     {
    //         title: "Title", blogID: 39, date: 1731096226817, blogImgURL: "https://placehold.co/600x400.png", blogImgDesc: "Desc"
    //     },
    //     {
    //         title: "Title", blogID: 39, date: 1731096226817, blogImgURL: "https://placehold.co/600x400.png", blogImgDesc: "Desc"
    //     },
    // ]

    // const blog = {
    //     "rawBlog": {
    //         "time": 1730816257391,
    //         "blocks": [
    //             {
    //                 "id": "XVSCAYqvh1",
    //                 "type": "header",
    //                 "data": {
    //                     "text": "Main Title",
    //                     "level": 1
    //                 }
    //             },
    //             {
    //                 "id": "MDmD3kUF_r",
    //                 "type": "header",
    //                 "data": {
    //                     "text": "Section Title",
    //                     "level": 2
    //                 }
    //             },
    //             {
    //                 "id": "SUfR66we1u",
    //                 "type": "header",
    //                 "data": {
    //                     "text": "Section Subtitle",
    //                     "level": 3
    //                 }
    //             },
    //             {
    //                 "id": "Rbwefynj2s",
    //                 "type": "paragraph",
    //                 "data": {
    //                     "text": "Paragraph, lorem ipsum"
    //                 }
    //             },
    //             {
    //                 "id": "7E_NkMUQSa",
    //                 "type": "list",
    //                 "data": {
    //                     "style": "unordered",
    //                     "items": [
    //                         "List item",
    //                         "List item",
    //                         "List item",
    //                         "List item"
    //                     ]
    //                 }
    //             },
    //             {
    //                 "id": "L6I1oqm3CP",
    //                 "type": "image",
    //                 "data": {
    //                     "url": "https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_1280.jpg",
    //                     "caption": "This is the image's alt tag",
    //                     "withBorder": false,
    //                     "withBackground": false,
    //                     "stretched": false
    //                 }
    //             },
    //             {
    //                 "id": "BagtrG4wbU",
    //                 "type": "paragraph",
    //                 "data": {
    //                     "text": "Thanks for reading, the end."
    //                 }
    //             }
    //         ],
    //         "version": "2.30.6"
    //     },
    //     "metaDescription": "This blog is about nothing at all",
    //     "blogTitle": "This is the blog's title",
    //     "blogImgURL": blogPlaceholderSrc,
    //     "blogImgDesc": "Whatever",
    //     "tags": [
    //         "Tag 1 ",
    //         "Tag 2",
    //         "Bananas"
    //     ]
    // };

    const formatDate = (ms) => {
        const date = new Date(ms);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
</script>

<main class="bg-white text-navy">
    <div class="blog-container fs-300">
        <h1 class="fs-xl">{blog.blogTitle}</h1>
        <img class="main-img" src="{blog.blogImgURL}" alt="{blog.blogImgDesc}">
        <p class="date fs-xs text-blue">{formatDate(blog.rawBlog.time)}</p>

        {#each blog.rawBlog.blocks as { type, data }}
            {#if type === "header"}
                {#if data.level === 2}
                    <h2 class="fs-500">{data.text}</h2>
                {:else if data.level === 3}
                    <h3 class="fs-400">{data.text}</h3>
                {/if}
            {:else if type === "paragraph"}
                <p>{data.text}</p>
            {:else if type === "list"}
                {#if data.style === "unordered"}
                    <ul>
                        {#each data.items as item}
                            <li>item</li>
                        {/each}
                    </ul>
                {:else}
                    <ol>
                        {#each data.items as item}
                            <li>item</li>
                        {/each}
                    </ol>
                {/if}
            {:else if type === "image"}
                <img src="{data.url}" alt="{data.caption}">
            {/if}
        {/each}
    </div>
    <div class="recent-posts">
        <h2 class="fs-500">Recent Posts</h2>
        <div>
            {#each recentBlogs as { title, blogID, date, blogImgURL, blogImgDesc }}
            <a class="text-navy fs-xs" href="{blogID}">
                <img src="{blogImgURL}" alt="{blogImgDesc}">
                <p>{title}</p>
                <p class="text-blue">{formatDate(date)}</p>
            </a>
            {/each}
        </div>
    </div>
</main>
<Cta />

<style>
    main {
        padding-top: var(--main-padding-top);
        display: flex;
        /* gap: var(--spacing); */
        min-height: 100vh;
    }

    .blog-container {
        flex: 1;
        padding-inline: var(--spacing);
    }

    .blog-container > *:not(img) {
        max-width: 1200px;
        margin: auto;
    }

    .blog-container > img {
        max-width: 100%;
        margin: auto;
    }

    .blog-container > img:not(.main-img) {
        scale: .85;
    }

    .recent-posts {
        width: 30vw;
        max-width: 350px;
        padding: var(--spacing);
        padding-top: 0;
        padding-left: 0;
    }

    .recent-posts a {
        text-decoration: none;
        display: block;
    }

    .recent-posts div > * {
        margin-bottom: 1rem;
    }

    .blog-container h1 {
        margin-block-end: .5rem;
    }

    .blog-container .date {
        margin-top: .5rem;
        margin-bottom: 1.5rem;
    }

    .blog-container h2 {
        margin-bottom: 1rem;
    }

    .blog-container h3 {
        margin-bottom: .5rem;
    }

    .blog-container p {
        margin-bottom: .5rem;
    }

    @media (max-width: 768px) {
        main {
            gap: var(--spacing);
            flex-direction: column;
        }

        .recent-posts {
            max-width: unset;
            width: 100%;
            padding: var(--spacing);
            margin-top: var(--spacing);
        }

        .recent-posts > div {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: var(--spacing);
        }

        .recent-posts h2 {
            font-size: var(--fs-xl);
        }

        .recent-posts p {
            font-size: var(--fs-400);
        }
    }
</style>