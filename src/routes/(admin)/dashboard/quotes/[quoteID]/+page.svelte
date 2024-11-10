<script>
	import { goto } from "$app/navigation";

    export let data;
    // Add quoteID
    const { quoteID, shutterType, averageEstimateSquareFootage, numberOfWindows, name, email, phoneNumber, specificWindowDimensions, avgCostPerWindow } = data.quote;

    // const { shutterType, averageEstimateSquareFootage, numberOfWindows, name, email, phoneNumber, specificWindowDimensions, avgCostPerWindow } = {
    //   "quoteID": 1,
    //   "shutterType": "zein shaban",
    //   "averageEstimateSquareFootage": 10,
    //   "numberOfWindows": 12,
    //   "name": "zein shaban",
    //   "email": "zain@gmail.com",
    //   "phoneNumber": 16,
    //   "specificWindowDimensions": "adfasdf",
    //   "avgCostPerWindow": "50",
    //   "date": 1731093735332
    // }

    const deleteQuote = async () => {
        try {
            const res = await fetch("../../../../api/quotes/delete", {
                method: "DELETE",
                body: JSON.stringify({ ids: [quoteID] }),
                headers: { "Content-Type": "application/json" }
            });
            const deleteData = await res.json();
            const status = deleteData.status;
            if(!status) {
                throw error(400, deleteData.message);
            }
            goto("/dashboard/quotes");
        } catch (err) {
            console.log(err);
        }
    }
</script>

<main class="fs-400">
    <div class="controls">
        <a href="/dashboard/quotes">Back</a>
        <button on:click={deleteQuote}>Delete</button>
    </div>
    <div class="quote">
        <div class="personal-info">
            <p class="name">{name}</p>
            <div>
                <p class="email">{email}</p>
                <p class="number">{phoneNumber}</p>
            </div>
        </div>
        <div class="shutter-type"><span>Shutter Type</span><span>{shutterType}</span></div>
        <div class="square-footage"><span>Average estimated<br>square footage</span><span>{averageEstimateSquareFootage}</span></div>
        <div class="number-of-windows"><span>Number of windows</span><span>{numberOfWindows}</span></div>
        <div class="dimensions"><span>Specific window<br>dimensions</span><span>{specificWindowDimensions}</span></div>
        <div class="total-estimate">Total estimate: {avgCostPerWindow}</div>
        <div>
            <a href="mailto:">Send Email</a>
            <a href="tel:">Call</a>
        </div>
    </div>
</main>

<style>
    .controls {
        display: flex;
        justify-content: space-between;
        padding: .5rem;
    }

    .quote {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 500px;
        margin: auto;
        padding: .5rem;
    }

    .name {
        font-weight: 600;
    }

    .personal-info {
        margin-bottom: 2rem;
    }

    .personal-info, div:has(> span) {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }

    div:has(> span) {
        align-items: center;
    }

    div:has(> span) span:first-of-type {
        font-weight: 600;
    }

    div:has(> span) span:last-of-type {
        color: #999999;
    }

    .total-estimate {
        text-align: right;
    }

    .quote > div:last-of-type {
        display: flex;
        justify-content: end;
        gap: .5rem;
    }

    button {
        border: 1px solid black;
        border-radius: .5rem;
        padding: .2rem .6rem;
        color: black;
        background-color: white;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        border: 1px solid black;
        border-radius: .5rem;
        padding: .2rem .6rem;
        color: black;
        background-color: white;
    }

    @media (max-width: 768px) {
        main {
            font-size: var(--fs-500);
        }
    }
</style>