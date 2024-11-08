<script>
	import { goto } from "$app/navigation";
    import callIconSrc from "$lib/assets/admin/call-icon.svg";
    import sendEmailIconSrc from "$lib/assets/admin/send-email-icon.svg";

    const formatDate = (ms) => {
        const date = new Date(ms);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    export let data;
    let { quotes } = data;

    const selectAll = () => {
        quotes.forEach(quote => {
            quote.checked = true;
        })

        quotes = quotes;
    }
</script>

<main class="fs-300">
    <div class="controls">
        <h1 class="fs-500">Quotes</h1>
        <div>
            <!-- <button>Unseen</button>
            <button>All</button> -->
            <button on:click={selectAll} class="select-all">Select all</button>
            <button>Mark as seen</button>
            <button>Delete</button>
        </div>
    </div>
    <div class="quotes">
        {#each quotes as { quoteID, checked = false, name, estimate, date, phoneNumber, email, seen }}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
            <div class="quote" class:seen id="{quoteID}" on:click={e => {
                if(!(e.target.tagName === "input" || e.target.classList.contains("call-btn") || e.target.classList.contains("email-btn"))) {
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
        cursor: pointer;
    }

    .name {
        font-weight: 600;
    }

    .date {
        margin-left: auto;
        color: #999999;
    }
</style>