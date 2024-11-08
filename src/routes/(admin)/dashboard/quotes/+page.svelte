<script>
    import callIconSrc from "$lib/assets/admin/call-icon.svg";
    import sendEmailIconSrc from "$lib/assets/admin/send-email-icon.svg";
    const formatDate = (ms) => {
        const date = new Date(ms);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    export let data;
    let { quotes } = data;

    // let quotes = [
    //     {name: "Zain Suleiman", estimate: 4000, date: new Date().getTime(), number: +988531888, email: "zain@gmail.com", seen: false},
    //     {name: "Zain Suleiman", estimate: 4000, date: new Date().getTime(), number: +988531888, email: "zain@gmail.com", seen: false},
    //     {name: "Zain Suleiman", estimate: 4000, date: new Date().getTime(), number: +988531888, email: "zain@gmail.com", seen: false},
    // ];

    // $: console.log(quotes);

    // const checkForCheckedQuotes = (quotes) => {
        
    // }
</script>

<main class="fs-300">
    <div class="controls">
        <h1 class="fs-500">Quotes</h1>
        <div>
            <button>Unseen</button>
            <button>All</button>
            <button class="select-all">Select all</button>
            <button>Mark as seen</button>
            <button>Delete</button>
        </div>
    </div>
    <div class="quotes">
        {#each quotes as { quoteID, checked = false, name, estimate, date, number, email, seen }}
            <div class="quote" class:seen id="{quoteID}">
                <input type="checkbox" bind:checked>
                <p class="name">{name}</p>
                <p class="estimate">{estimate}</p>
                <p class="date">{formatDate(date)}</p>
                <a href="tel:{number}"><img src="{callIconSrc}" alt="phone icon"></a>
                <a href="mailto:{email}"><img src="{sendEmailIconSrc}" alt="email icon"></a>
            </div>
        {/each}
    </div>
</main>

<style>
    .controls {
        padding: .5rem;
        position: sticky;
        top: 0;
        background-color: white;
    }

    .controls > h1 {
        text-align: center;
    }

    .controls > div {
        display: flex;
        gap: .5rem;
        align-items: center;
    }

    .select-all {
        margin-left: auto;
    }

    .quotes {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        padding: .5rem;
        max-width: 700px;
        margin-inline: auto;
    }

    .quote {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: .5rem;
        border: 1px solid #999999;
        border-radius: .5rem;
    }

    .name {
        font-weight: 600;
    }

    .date {
        margin-left: auto;
        color: #999999;
    }
</style>