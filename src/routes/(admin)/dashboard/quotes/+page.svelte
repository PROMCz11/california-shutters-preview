<script>
	import { goto } from "$app/navigation";
    import callIconSrc from "$lib/assets/admin/call-icon.svg";
    import sendEmailIconSrc from "$lib/assets/admin/send-email-icon.svg";
	import { error } from "@sveltejs/kit";

    const formatDate = (ms) => {
        const date = new Date(ms);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    // export let data;
    // let { quotes } = data;

    let quotes = [
        {
        "quoteID": 2,
        "shutterType": "composite",
        "averageEstimateSquareFootage": 250,
        "numberOfWindows": 333,
        "name": "Zain Suleiman",
        "email": "zain22@gmail.com",
        "phoneNumber": 9999999999,
        "specificWindowDimensions": "oncincj pwi vihe vph wfewf",
        "seen": 1,
        "avgCostPerWindow": 9999
      },
        {
        "quoteID": 2,
        "shutterType": "composite",
        "averageEstimateSquareFootage": 250,
        "numberOfWindows": 333,
        "name": "Zain Suleiman",
        "email": "zain22@gmail.com",
        "phoneNumber": 9999999999,
        "specificWindowDimensions": "oncincj pwi vihe vph wfewf",
        "seen": 0,
        "avgCostPerWindow": 9999
      },
        {
        "quoteID": 2,
        "shutterType": "composite",
        "averageEstimateSquareFootage": 250,
        "numberOfWindows": 333,
        "name": "Zain Suleiman",
        "email": "zain22@gmail.com",
        "phoneNumber": 9999999999,
        "specificWindowDimensions": "oncincj pwi vihe vph wfewf",
        "seen": 1,
        "avgCostPerWindow": 9999
      },
        {
        "quoteID": 2,
        "shutterType": "composite",
        "averageEstimateSquareFootage": 250,
        "numberOfWindows": 333,
        "name": "Zain Suleiman",
        "email": "zain22@gmail.com",
        "phoneNumber": 9999999999,
        "specificWindowDimensions": "oncincj pwi vihe vph wfewf",
        "seen": 0,
        "avgCostPerWindow": 9999
      },
    ];

    $: checkedQuotes = quotes.filter(quote => quote.checked);

    const selectAll = () => {
        quotes.forEach(quote => {
            quote.checked = true;
        })
        quotes = quotes;
    }

    const unselectAll = () => {
        quotes.forEach(quote => {
            quote.checked = false;
        })
        quotes = quotes;
    }

    let unseenQuotesOnly = false;

    const deleteQuotes = async () => {
        const deletedQuotesIDS = checkedQuotes.map(quote => quote.quoteID);
        try {
            const res = await fetch("../../../api/quotes/delete", {
                method: "DELETE",
                body: JSON.stringify({ ids: deletedQuotesIDS }),
                headers: { "Content-Type": "application/json" }
            });
            const deleteData = await res.json();
            const status = deleteData.status;
            if(!status) {
                throw error(400, deleteData.message);
            }
            quotes = quotes.filter(quote => !quote.checked);
            checkedQuotes = [];
        } catch (err) {
            console.log(err);
        }
    }
</script>

<svelte:head>
	<title>Quotes</title>
	<!-- <meta name="description" content="This is where the description goes for SEO" /> -->
</svelte:head>

<main class="fs-300">
    <div class="controls">
        <h1 class="fs-500">Quotes</h1>
        {#if quotes.length}
            <div>
                <button class:active={!unseenQuotesOnly} on:click={() => unseenQuotesOnly = false}>All</button>
                <button class:active={unseenQuotesOnly} on:click={() => unseenQuotesOnly = true}>Unseen</button>
                {#if checkedQuotes.length === quotes.length}
                    <button on:click={unselectAll} class="select-all">Unselect all</button>
                {:else}   
                    <button on:click={selectAll} class="select-all">Select all</button>
                {/if}
                {#if checkedQuotes.length}
                    <!-- <button>Mark as seen</button> -->
                    <button on:click={deleteQuotes}>Delete</button>
                {/if}
            </div>
        {/if}
    </div>
    <div class="quotes">
        {#if !unseenQuotesOnly} 
            {#each quotes as { quoteID, checked = false, name, estimate, date, phoneNumber, email, seen }}
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <!-- svelte-ignore a11y_click_events_have_key_events -->
                <div class="quote" class:checked class:seen id="{quoteID}" on:click={e => {
                    if(!(e.target.tagName === "INPUT" || e.target.tagName === "IMG" || e.target.classList.contains("call-btn") || e.target.classList.contains("email-btn"))) {
                        goto(`quotes/${quoteID}`);
                    }
                }}>
                    <input type="checkbox" bind:checked>
                    <p class="name">{name}</p>
                    <p class="estimate">{estimate}</p>
                    <p class="date">{formatDate(date)}</p>
                    <a class="call-btn" href="tel:{phoneNumber}"><img src="{callIconSrc}" alt="phone icon"></a>
                    <a class="email-btn" href="mailto:{email}"><img src="{sendEmailIconSrc}" alt="email icon"></a>
                </div>
            {:else}
                <p style="text-align: center;">No quotes</p>
            {/each}
        {:else}
            {#each quotes as { quoteID, checked = false, name, estimate, date, phoneNumber, email, seen }}
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <!-- svelte-ignore a11y_click_events_have_key_events -->
                {#if !seen}
                    <div class="quote" class:checked class:seen id="{quoteID}" on:click={e => {
                        if(!(e.target.tagName === "INPUT" || e.target.tagName === "IMG" || e.target.classList.contains("call-btn") || e.target.classList.contains("email-btn"))) {
                            goto(`quotes/${quoteID}`);
                        }
                    }}>
                        <input type="checkbox" bind:checked>
                        <p class="name">{name}</p>
                        <p class="estimate">{estimate}</p>
                        <p class="date">{formatDate(date)}</p>
                        <a class="call-btn" href="tel:{phoneNumber}"><img src="{callIconSrc}" alt="phone icon"></a>
                        <a class="email-btn" href="mailto:{email}"><img src="{sendEmailIconSrc}" alt="email icon"></a>
                    </div>
                {/if}
            {:else}
                <p style="text-align: center;">No quotes</p>
            {/each}
        {/if}
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
        cursor: pointer;
    }

    .name {
        font-weight: 600;
    }

    .date {
        margin-left: auto;
        color: #999999;
    }

    .quote.seen {
        background-color: #ECF1FA;
        color: #64666A;
    }

    .quote.checked {
        background-color: #C3D6FF;
        border-color: #001882;
        color: black;
    }

    .quote:hover {
        border: 1px solid black;
    }

    button {
        border: 1px solid black;
        border-radius: .5rem;
        padding: .2rem .6rem;
        color: black;
        background-color: white;
    }

    button.active {
        background-color: #C3D6FF;
        border-color: #001882;
        color: black;
    }
</style>