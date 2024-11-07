<script>

</script>

<main class="fs-400">
    <div class="controls">
        <a href="/dashboard/quotes">Back</a>
        <button>Delete</button>
    </div>
    <div class="quote">
        <div class="personal-info">
            <p class="name">John Doe</p>
            <div>
                <p class="email">example@example.com</p>
                <p class="number">0999999999</p>
            </div>
        </div>
        <div class="shutter-type"><span>Shutter Type</span><span>Composite</span></div>
        <div class="square-footage"><span>Average estimated<br>square footage</span><span>250</span></div>
        <div class="number-of-windows"><span>Number of windows</span><span>5</span></div>
        <div class="dimensions"><span>Specific window<br>dimensions</span><span>32” x 32”</span></div>
        <div class="total-estimate">Total estimate: xxx-xxx</div>
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

    @media (max-width: 768px) {
        main {
            font-size: var(--fs-500);
        }
    }
</style>