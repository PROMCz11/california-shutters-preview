<script>
    import desktopBgSrc from "$lib/assets/cta/gallery-cta-desktop.webp";
    import mobileBgSrc from "$lib/assets/cta/gallery-cta-mobile.webp";
</script>

<div class="main">
    <div class="bg-white text-navy">
        <h2 class="text-xl">Get your FREE quote now!</h2>
        <p class="text-blue">Fill the form below and we'll confirm your quote ASAP!</p>
    </div>
    <div class="primary-cta">
        <h2 class="text-500">Average cost per window is ~$1,800 - $2,250</h2>
        <form action="">
            <div class="shutter-type">
                <p>Choose shutter type</p>
                <div>
                    <div>
                        <input type="radio" name="shutter-type" id="composite">
                        <label for="composite">Composite</label>
                    </div>
                    <div>
                        <input type="radio" name="shutter-type" id="select-wood/vinyl">
                        <label for="select-wood/vinyl">Select Wood / Vinyl</label>
                    </div>
                    <div>
                        <input type="radio" name="shutter-type" id="premium-wood/vinyl">
                        <label for="premium-wood/vinyl">Premium Wood / Vinyl</label>
                    </div>
                </div>
            </div>
            <div class="square-footage">
                <p>Select average estimate square footage of windows that have to be covered</p>
                <div>
                    <div>
                        <input type="radio" name="square-footage" id="50">
                        <label for="50">50</label>
                    </div>
                    <div>
                        <input type="radio" name="square-footage" id="100">
                        <label for="100">100</label>
                    </div>
                    <div>
                        <input type="radio" name="square-footage" id="250">
                        <label for="250">250</label>
                    </div>
                    <div>
                        <input type="radio" name="square-footage" id="500">
                        <label for="500">500</label>
                    </div>
                    <div>
                        <input type="radio" name="square-footage" id="1000">
                        <label for="1000">1000</label>
                    </div>
                </div>
            </div>
            <div class="number-of-windows">
                <p>Provide the number of windows</p>
                <input type="number" placeholder="4">
            </div>
            <div class="phone-number">
                <p>What's your number?</p>
                <input type="text" placeholder="Number input">
            </div>
            <div class="window-dimensions">
                <p>What are your specific window dimensions?</p>
                <input type="text" placeholder="Window dimensions">
            </div>
            <button class="bg-yellow text-navy">Confirm my quote</button>
        </form>
    </div>
    <div class="secondary-cta">
        <div style="background-image: url({desktopBgSrc})">
            <a href="/gallery"><button class="bg-yellow text-navy">Browse our Gallery</button></a>
        </div>
    </div>
</div>

<style>
    .main > div:first-of-type {
        text-align: center;
        padding-block: var(--spacing);
    }

    .primary-cta {
        padding: var(--spacing);
    }
    
    .primary-cta > h2 {
        max-width: 900px;
        margin-inline: auto;
        margin-block: var(--spacing);
    }

    form > div {
        margin-inline: auto;
        margin-block: var(--spacing);
        max-width: 900px;
    }

    form > div > div {
        margin-inline-start: var(--spacing);
        display: flex;
        flex-wrap: wrap;
    }

    form > div > p {
        margin-bottom: calc(var(--spacing) / 2 - .2rem);
        font-weight: 600;
    }
    
    /* Gigga Chad Selector */
    div:has( > input[type="radio"]) {
        display: inline-block;
        margin-right: var(--spacing);
        display: grid;
        grid-template-columns: 1.2em auto;
        gap: 0.5em;
    }

    input[type="text"], input[type="number"] {
        border: 1px solid var(--clr-blue);
        background-color: transparent;
        color: var(--clr-white);
        padding-inline: .5rem;
        border-radius: 0;
    }

    input[type="text"]::placeholder, input[type="number"]::placeholder {
        color: var(--clr-blue);
    }

    input[type="radio"] {
        -webkit-appearance: none;
        appearance: none;
        background-color: transparent;
        width: 1.15em;
        height: 1.15em;
        border-radius: 50%;
        border: 0.15em solid var(--clr-blue);
        display: grid;
        place-content: center;
    }
    
    input[type="radio"]::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        border-radius: 50%;
        transform: scale(0);
        transition: 90ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--clr-yellow);
    }

    input[type="radio"]:checked::before {
        transform: scale(1);
    }

    form > button {
        margin-inline: auto;
        display: block;
    }

    .secondary-cta {
        padding: var(--spacing);
        max-width: calc(var(--spacing) * 2 + 900px);
        margin-inline: auto;
        margin-top: var(--spacing);
    }

    .secondary-cta > div {
        min-height: 30vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-position: center center;
        background-size: cover;
    }
</style>