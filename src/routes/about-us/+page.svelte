<script>
    import aboutUsHeadingSrc from "$lib/assets/about-us/about-us-heading.webp";
</script>

<main>
    <article>
        <picture><img src="{aboutUsHeadingSrc}" alt="shutter"></picture>
        <h1 class="fs-xl">We cover your windows with a heavenly touch</h1>
        <p>Many years ago, our founder had a vision to furnish every home in Toronto and surrounding regions with the highest quality wood shutter available on the market. 25 years to that day, and our shutters are finally filling homes across the nation! We've successfully served thousands of delighted customers, and we are ready to give you the same service, quality and price that we've always been known for.</p>
    </article>
</main>
<div class="box"></div>

<style>
    main {
        padding: var(--spacing);
        padding-top: 6.5rem;
    }

    article {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 2;
        gap: var(--spacing);
        align-items: center;
        justify-items: center;
        max-width: 1150px;
        margin: auto;
    }

    article > * {
        max-width: 700px;
    }

    article h1 {
        align-self: end;
    }

    article p {
        align-self: start;
    }

    article picture {
        grid-row: span 2;
        max-width: 500px;
    }

    @media (max-width: 1150px) {
        article {
            grid-template-columns: 1fr;
        }

        article h1 {
            order: -1;
        }
    }
</style>