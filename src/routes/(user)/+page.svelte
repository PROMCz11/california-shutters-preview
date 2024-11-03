<script>
    // import heroImg1Src from "$lib/assets/home/IMG_3573.webp";
    // import heroImg2Src from "$lib/assets/home/IMG_3725.webp";
    // import heroImg3Src from "$lib/assets/home/IMG_4027.webp";
    // import heroImg4Src from "$lib/assets/home/IMG_4078.webp";
    // import heroImg5Src from "$lib/assets/home/IMG_4396.webp";
    // import heroImg6Src from "$lib/assets/home/IMG_4539.webp";
    // import heroImg7Src from "$lib/assets/home/IMG_4575 3.webp";
    // import heroImg8Src from "$lib/assets/home/IMG_4577.webp";
    // import heroImg9Src from "$lib/assets/home/IMG_4079.webp";
    // import heroImg10Src from "$lib/assets/home/IMG_4542.webp";
    
    import heroImg1Src from "$lib/assets/home/heading-1.webp";
    import heroImg2Src from "$lib/assets/home/heading-2.webp";
    import heroImg3Src from "$lib/assets/home/heading-3.webp";
    import heroImg4Src from "$lib/assets/home/heading-4.webp";
    import heroImg5Src from "$lib/assets/home/heading-5.webp";
    import heroImg6Src from "$lib/assets/home/heading-6.webp";
    import heroImg7Src from "$lib/assets/home/heading-7.webp";
    import heroImg8Src from "$lib/assets/home/heading-8.webp";
    import heroImg9Src from "$lib/assets/home/heading-9.webp";
    import heroImg10Src from "$lib/assets/home/heading-10.webp";

    import gearSrc from "$lib/assets/home/gear.svg";
    import qualitySrc from "$lib/assets/home/quality.svg";
    import piggybankSrc from "$lib/assets/home/piggybank.svg";

    import canadianHardwoodSrc from "$lib/assets/home/canadian-hardwood.webp"
    import noCompositeSrc from "$lib/assets/home/no-composite.webp"
    import premiumPoplarSrc from "$lib/assets/home/premium-poplar.webp"
    import straightShutterSrc from "$lib/assets/home/straight-shutter.webp"
    import mainIcon1Src from "$lib/assets/home/main-icon-1.svg";
    import mainIcon2Src from "$lib/assets/home/main-icon-2.svg";
    import mainIcon3Src from "$lib/assets/home/main-icon-3.svg";
    import mainIcon4Src from "$lib/assets/home/main-icon-4.svg";
    import frameSrc from "$lib/assets/home/frame.svg";
    import uvResistantSrc from "$lib/assets/home/uv-resistant.webp";
    import warrantySrc from "$lib/assets/home/warranty.webp";
    
    import whiteShutterSrc from "$lib/assets/home/white-shutter.png";

    import expandFAQIconSrc from "$lib/assets/home/expand-faq-icon.svg";

    import quoteIconSrc from "$lib/assets/home/quote-icon.svg";
    import fiveStarsSrc from "$lib/assets/home/five-stars.svg";
    import testimonialsPlaceholderSrc from "$lib/assets/home/testimonials-placeholder.webp";

    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';

    import { animate, scroll, inView, timeline } from "motion";
	import { onMount } from "svelte";

    import Cta from "$lib/components/Cta.svelte";

    onMount(() => {
        const collageImgs = document.querySelectorAll(".background-collage picture");
        const heroContent = document.querySelector(".content");
        const articleElement = document.querySelector("article");
        inView(collageImgs, ({ target }) => {
            animate(target, { opacity: [0, 1], y: ["70%", 0] }, {
                margin: "-350px 0",
                duration: .750
            })
        })

        scroll(
            animate(heroContent, { y: [0, "-100%"], display: "none" }), { target: articleElement, offset: ["0% 0%", "100% 30%"] }
        )

        scroll(
            animate(heroContent, { opacity: [1, 0] }), { target: articleElement, offset: ["50% 0%", "100% 30%"] }
        )

        const mainFeaturesImagesDouble = document.querySelectorAll(".main-features .double picture");
        mainFeaturesImagesDouble.forEach(image => {
            scroll(
                animate(image, { y: [-50, 50] }), {
                    target: image.parentElement.parentElement,
                    offset: ["start end", "end start"]
                }
            )
        })

        const mainFeaturesImagesSingle = document.querySelectorAll(".main-features .single picture");
        mainFeaturesImagesSingle.forEach(image => {
            scroll(
                animate(image, { y: [-50, 50] }), {
                    target: image.parentElement.parentElement,
                    offset: ["start end", "end start"]
                }
            )
        })


        // Making the faq questions interactive
        const faqContainer = document.querySelector(".faq > div");
        faqContainer.addEventListener("click", e => {
            const target = e.target;
            if(target.classList.contains("question")) {
                target.classList.toggle("active");
            }

            else if(target.parentElement.classList.contains("question")) {
                target.parentElement.classList.toggle("active");
            }

            else if(target.parentElement.parentElement.classList.contains("question")) {
                target.parentElement.parentElement.classList.toggle("active");
            }

            else if(target.parentElement.parentElement.parentElement.classList.contains("question")) {
                target.parentElement.parentElement.parentElement.classList.toggle("active");
            }
        })

        // Handling page loading
        const handleLoad = () => document.getElementById("loader").style.display = "none";
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }
    })
</script>

<main>
    <article class="hero">
        <div class="content">
            <div>
                <h1 class="fs-heading">Redefining the California Shutter</h1>
                <p class="fs-400 sub-heading">With Victorian styled crown molding built into the front-side faces, this Toronto inspired window shutter was made to turn heads.</p>
            </div>
            <div>
                <a href="/"><button class="bg-yellow">GET FREE QUOTE NOW!</button></a>
                <p class="fs-xs">Thousands of delighted customers over 25 years!</p>
            </div>
        </div>
        <div class="background-collage">
            <div class="shift">
                <picture>
                    <img src="{heroImg1Src}" alt="background shutter">
                </picture>
                <picture>
                    <img src="{heroImg2Src}" alt="background shutter">
                </picture>
            </div>
            <div class="reverse-shift">
                <picture style="scale: 1.5;">
                    <img src="{heroImg3Src}" alt="background shutter">
                </picture>
                <picture>
                    <img src="{heroImg4Src}" alt="background shutter">
                </picture>
            </div>
            <div class="shift">
                <picture>
                    <img src="{heroImg5Src}" alt="background shutter">
                </picture>
                <picture style="scale: 1.5;">
                    <img src="{heroImg6Src}" alt="background shutter">
                </picture>
            </div>
            <div class="reverse-shift">
                <picture>
                    <img src="{heroImg7Src}" alt="background shutter">
                </picture>
                <picture style="scale: 1.5;">
                    <img src="{heroImg8Src}" alt="background shutter">
                </picture>
            </div>
            <div class="shift">
                <picture>
                    <img src="{heroImg9Src}" alt="background shutter">
                </picture>
                <picture style="scale: 1.5;">
                    <img src="{heroImg10Src}" alt="background shutter">
                </picture>
            </div>
        </div>
        <div class="note fs-300">
            <p>We <span class="text-yellow">only</span> do repairs for <span class="text-yellow">our</span> customers</p>
        </div>
    </article>
    <section class="general-benefits bg-white text-navy fs-300">
        <div>
            <div>
                <img src="{gearSrc}" alt="gear icon">
                <div>
                    <h2>Excellent Service</h2>
                    <p>We're ready to meet all of your California Shutter needs!</p>
                </div>
            </div>
            <div>
                <img src="{qualitySrc}" alt="quality icon">
                <div>
                    <h2>Record-Breaking Quality</h2>
                    <p>We have the highest quality California Shutter in Toronto!<br>Check out our reviews!</p>
                </div>
            </div>
            <div>
                <img src="{piggybankSrc}" alt="piggybank icon">
                <div>
                    <h2>Exceptional Prices</h2>
                    <p>We offer competitive pricing for the top quality California shutters in Toronto</p>
                </div>
            </div>
        </div>
        <h1 class="fs-heading">Three Reasons Why We're the Best</h1>
    </section>
    <section class="main-features">
        <h2 class="fs-xl">1. Constructed with Premium Canadian Poplar</h2>
        <div class="double fs-xs">
            <div class="frame"></div>
            <div>
                <div>
                    <img src="{mainIcon1Src}" alt="canada's flag icon">
                    <p>All our California and plantation shutters are made with the best Canadian hardwoods on today's market.</p>
                </div>
                <picture>
                    <img src="{noCompositeSrc}" alt="logs">
                </picture>
            </div>
            <div>
                <picture>
                    <img src="{canadianHardwoodSrc}" alt="hardwood">
                </picture>
                <div>
                    <img src="{mainIcon2Src}" alt="log icon">
                    <p>We do not use composite or makeshift woods to construct even our lowest tier product.</p>
                </div>
            </div>
        </div>
        <div class="double fs-xs">
            <div class="frame"></div>
            <div>
                <div>
                    <img src="{mainIcon3Src}" alt="canada's flag icon">
                    <p>All our California and plantation shutters are made with the best Canadian hardwoods on today's market.</p>
                </div>
                <picture>
                    <img src="{straightShutterSrc}" alt="logs">
                </picture>
            </div>
            <div>
                <picture>
                    <img src="{premiumPoplarSrc}" alt="hardwood">
                </picture>
                <div>
                    <img src="{mainIcon4Src}" alt="log icon">
                    <p>We do not use composite or makeshift woods to construct even our lowest tier product.</p>
                </div>
            </div>
        </div>
        <h2 class="fs-xl">2. Highest Quality UV Resistant Wood Finish</h2>
        <div class="single">
            <p>Our California shutters are sealed with the best wood finish available on the market. We are not like other companies who use water based paint-primer mixes to cover their products for fast & cheap delivery. Our shutters are always painted and primed each at least once. For our higher-level products, we prime up to three times so to provide a smoother and more precise finish.</p>
            <div>
                <div class="frame"></div>
                <picture>
                    <img src="{uvResistantSrc}" alt="painting wood with uv solution">
                </picture>
            </div>
        </div>
        <h2 class="fs-xl">3. Unlimited Lifetime Warranty Guaranteed</h2>
        <div class="single alternate">
            <div>
                <div class="frame"></div>
                <picture>
                    <img src="{warrantySrc}" alt="shutters">
                </picture>
            </div>
            <p>Most other companies offer lifetime warranties but many of them do not offer them unlimitedly. What does that mean? I'm glad you've asked! This simply means that if anything - I mean anything - happens to your shutters that was out of your control, we will simply replace it or repair it on the spot at no cost to you. And the best part is this warranty is good for 25 years!</p>
        </div>
    </section>
    <!-- <div class="box"></div> -->
    <section class="free-installation bg-white text-navy">
        <img src="{whiteShutterSrc}" alt="white shutter of the left">
        <div>
            <h2 class="fs-xl">Free Calofornia Shutter Installation with Any Purchase</h2>
            <p>To thank you for your business, we will absorb all installation charges! We install your shutters with the same precision and care that was used to make them.</p>
        </div>
        <img class="reversed" src="{whiteShutterSrc}" alt="white shutter of the right">
    </section>
    <section class="testimonials bg-white text-navy">
        <div>
            <h2 class="fs-xl">Satisfaction Guaranteed!</h2>
            <h3 class="text-blue fs-400">We are Toronto's #1 California Shutters Company</h3>
        </div>
        <div class="slider">
            <Splide options={ { rewind: true, width: 1200 } } aria-label="testimonials">
                <SplideSlide>
                <div class="card fs-400 bg-navy text-white text-only">
                    <div>
                        <img class="quote-icon" src="{quoteIconSrc}" alt="quote icon">
                        <p>High quality product and fantastic customer service! The shutters not only look amazing, but help with insulation in the winter and keeping the heat out in the summer. Would highly recommend. Thanks for such a great job, it was a pleasure dealing with you!</p>
                        <div>
                            <img class="stars-icon" src="{fiveStarsSrc}" alt="five stars">
                            <span style="color: #C5C6D1;">John D.</span>
                        </div>
                    </div>
                    <!-- <picture>
                        <img src="{testimonialsPlaceholderSrc}" alt="placeholder">
                    </picture> -->
                </div>
                </SplideSlide>
                <SplideSlide>
                <div class="card fs-400 bg-navy text-white">
                    <div>
                        <img class="quote-icon" src="{quoteIconSrc}" alt="quote icon">
                        <p>High quality product and fantastic customer service! The shutters not only look amazing, but help with insulation in the winter and keeping the heat out in the summer. Would highly recommend. Thanks for such a great job, it was a pleasure dealing with you!</p>
                        <div>
                            <img class="stars-icon" src="{fiveStarsSrc}" alt="five stars">
                            <span style="color: #C5C6D1;">John D.</span>
                        </div>
                    </div>
                    <picture>
                        <img src="{testimonialsPlaceholderSrc}" alt="placeholder">
                    </picture>
                </div>
                </SplideSlide>
                <SplideSlide>
                <div class="card fs-400 bg-navy text-white">
                    <div>
                        <img class="quote-icon" src="{quoteIconSrc}" alt="quote icon">
                        <p>High quality product and fantastic customer service! The shutters not only look amazing, but help with insulation in the winter and keeping the heat out in the summer. Would highly recommend. Thanks for such a great job, it was a pleasure dealing with you!</p>
                        <div>
                            <img class="stars-icon" src="{fiveStarsSrc}" alt="five stars">
                            <span style="color: #C5C6D1;">John D.</span>
                        </div>
                    </div>
                    <picture>
                        <img src="{testimonialsPlaceholderSrc}" alt="placeholder">
                    </picture>
                </div>
                </SplideSlide>
                <SplideSlide>
                <div class="card fs-400 bg-navy text-white">
                    <div>
                        <img class="quote-icon" src="{quoteIconSrc}" alt="quote icon">
                        <p>High quality product and fantastic customer service! The shutters not only look amazing, but help with insulation in the winter and keeping the heat out in the summer. Would highly recommend. Thanks for such a great job, it was a pleasure dealing with you!</p>
                        <div>
                            <img class="stars-icon" src="{fiveStarsSrc}" alt="five stars">
                            <span style="color: #C5C6D1;">John D.</span>
                        </div>
                    </div>
                    <picture>
                        <img src="{testimonialsPlaceholderSrc}" alt="placeholder">
                    </picture>
                </div>
                </SplideSlide>
                <SplideSlide>
                <div class="card fs-400 bg-navy text-white">
                    <div>
                        <img class="quote-icon" src="{quoteIconSrc}" alt="quote icon">
                        <p>High quality product and fantastic customer service! The shutters not only look amazing, but help with insulation in the winter and keeping the heat out in the summer. Would highly recommend. Thanks for such a great job, it was a pleasure dealing with you!</p>
                        <div>
                            <img class="stars-icon" src="{fiveStarsSrc}" alt="five stars">
                            <span style="color: #C5C6D1;">John D.</span>
                        </div>
                    </div>
                    <picture>
                        <img src="{testimonialsPlaceholderSrc}" alt="placeholder">
                    </picture>
                </div>
                </SplideSlide>
            </Splide>
        </div>
    </section>
    <section class="faq bg-white text-navy">
        <h2 class="fs-xl">Frequently Asked Questions (FAQ)</h2>
        <div>
            <div class="question">
                <p>
                    <span>I don't like the boxy look of California Shutters! What should I do?</span>
                    <button><img src="{expandFAQIconSrc}" alt="expand plus icon"></button>
                </p>
                <p class="fs-300 bg-navy text-white">Most companies out there only provide their customers with one styled shutter. These shutters are boxy looking and flat-styled. They are many times structurally incompetent due to the cheapness of the materials used in their construction. Frankly boxy looking, flat-styled shutters are a pain to look at - especially if you've had them for a long time. California Shutters Toronto Co is one of the only shutter manufactures that makes different styled California shutters.</p>
            </div>
            <div class="question active">
                <p>
                    <span>I don't like the boxy look of California Shutters! What should I do?</span>
                    <button><img src="{expandFAQIconSrc}" alt="expand plus icon"></button>
                </p>
                <p class="fs-300 bg-navy text-white">Most companies out there only provide their customers with one styled shutter. These shutters are boxy looking and flat-styled. They are many times structurally incompetent due to the cheapness of the materials used in their construction. Frankly boxy looking, flat-styled shutters are a pain to look at - especially if you've had them for a long time. California Shutters Toronto Co is one of the only shutter manufactures that makes different styled California shutters.</p>
            </div>
            <div class="question">
                <p>
                    <span>I don't like the boxy look of California Shutters! What should I do?</span>
                    <button><img src="{expandFAQIconSrc}" alt="expand plus icon"></button>
                </p>
                <p class="fs-300 bg-navy text-white">Most companies out there only provide their customers with one styled shutter. These shutters are boxy looking and flat-styled. They are many times structurally incompetent due to the cheapness of the materials used in their construction. Frankly boxy looking, flat-styled shutters are a pain to look at - especially if you've had them for a long time. California Shutters Toronto Co is one of the only shutter manufactures that makes different styled California shutters.</p>
            </div>
        </div>
    </section>
    <Cta />
</main>
<div id="loader">
    Loading... 
</div>

<style>
    .hero {
        max-width: 100vw;
        overflow: hidden;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        text-align: center;
        position: fixed;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        width: 100%;
    }

    .content h1 {
        padding-inline: 2rem;
    }

    .content > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }

    .sub-heading {
        max-width: 70%;
    }

    .content a {
        font-weight: 600;
    }

    .background-collage {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10rem;
        z-index: -1;
    }

    .background-collage picture {
        max-width: 320px;
        opacity: 0;
    }

    .background-collage > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 90vw;
    }

    .background-collage > .shift {
        translate: 10% 0;
    }

    .background-collage > .reverse-shift {
        translate: -10% 0;
    }

    .note {
        font-weight: 600;
        text-align: center;
        padding-block: 1rem;
    }

    .general-benefits > div {
        padding: 3rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 3rem;
    }

    .general-benefits > div > div {
        max-width: 350px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        text-align: center;
        padding-block: var(--spacing);
    }

    .general-benefits > h1 {
        padding-inline: 2rem;
        padding-bottom: var(--spacing);
        padding-top: calc(var(--spacing) * 5);
        text-align: center;
    }

    .main-features > h2 {
        margin-block: var(--spacing);
        text-align: center;
    }

    .main-features {
        padding: var(--spacing);
    }

    .main-features > * {
        margin-bottom: 3rem;
    }

    .main-features .double {
        display: flex;
        gap: var(--spacing);
        justify-content: center;
        min-height: 80vh;
        position: relative;
        padding-block: var(--spacing);
    }

    .main-features .double > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .main-features .frame {
        aspect-ratio: 3 / 2;
    }

    .main-features .double > div > div {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .main-features .double > div,
    .main-features .frame,
    .main-features .single > div {
        max-width: 30vw;
        /* aspect-ratio: 3 / 2; */
    }

    .main-features .single .frame,
    .main-features .single > div {
        max-width: 100%;
        max-width: 400px;
    }

    /* .main-features .single * {
        border: 1px solid red;
    } */

    .main-features .single {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
        justify-items: center;
        padding: 3rem;
    }

    .main-features .single > div {
        position: relative;
        align-self: center;
    }

    .main-features .single picture {
        translate: -10% -10%;
    }

    .main-features .single.alternate picture {
        translate: 10% -10%;
    }

    .free-installation {
        display: flex;
        justify-content: space-between;
        position: relative;
        min-height: 500px;
    }

    .free-installation img {
        width: 40%;
    }

    .free-installation .reversed {
        -moz-transform: scale(-1, -1);
        -o-transform: scale(-1, -1);
        -webkit-transform: scale(-1, -1);
        transform: scale(-1, -1);
    }

    .free-installation > div {
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        z-index: 2;
        width: 70%;
        text-align: center;
    }

    .testimonials h2, .testimonials h3 {
        text-align: center;
    }

    .testimonials .slider {
        max-width: max-content;
        margin-inline: auto;
        padding-block: var(--spacing);
    }

    .card {
        display: flex;
        gap: 1rem;
        padding: 3rem;
        align-items: center;
        height: 100%;
        padding-inline: 6rem;
    }

    .card > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        gap: 1rem;
    }

    .card > div > div {
        display: flex;
        gap: 1rem;
        justify-content: end;
        width: 100%;
    }

    .faq {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: calc(var(--spacing) * 2);
    }

    .faq h2 {
        text-align: center;
        padding: var(--spacing);
    }

    .faq > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: var(--spacing);
        max-width: 1024px;
    }

    .faq .question {
        cursor: pointer;
    }

    .faq .question p:first-of-type {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .5rem;
        border-bottom: 1px solid var(--clr-navy);
    }

    .faq .question p:last-of-type {
        padding: 1rem;
        max-height: 0;
        padding-block: 0;
        overflow: hidden;
        transition: all 300ms ease;
    }

    .faq button {
        padding: 0;
        transition: rotate 300ms ease;
    }

    .faq .question.active p:last-of-type {
        max-height: 500px;
        padding-block: 1rem;
    }

    .faq .question.active button {
        rotate: 45deg;
    }

    @media (max-width: 900px) {
        .background-collage picture {
            max-width: 200px;
        }

        .main-features .single {
            grid-template-columns: 1fr;
        }

        .main-features .single > div {
            order: -1;
        }
    }

    @media (max-width: 768px) {
        .card {
            flex-direction: column-reverse;
            padding: 2rem;
            font-size: var(--fs-xs);
            justify-content: center;
        }

        .card.text-only {
            padding-inline: 4rem;
        }

        .card .quote-icon {
            max-width: 40px;
        }

        .card .stars-icon {
            max-width: 100px;
        }

        .card > div:last-of-type {
            margin-left: auto;
        }

        .testimonials .slider {
            max-width: 80vw;
        }

        .main-features .double > div > div img {
            width: 30px;
        }
    }

    @media (max-width: 500px) {
        .background-collage picture {
            max-width: 130px;
        }
        /* Split the main features */
    }

    /* Separate media queries for the main features page */
    /* @media (min-width: 768px) {

    } */

    @media (max-width: 1024px) {

        .main-features .double {
            flex-direction: column;
            justify-content: space-between;
            min-height: 60vh;
        }

        .main-features .double > div:last-of-type {
            margin-left: auto;
        }

        .main-features .double > div {
            gap: 2rem;
        }
        
        .main-features .double > div,
        .main-features .frame {
            width: 40vw;
            min-width: 200px;
            max-width: 400px;
        }

        .main-features .single .frame,
        .main-features .single > div {
            width: 100%;
        }
    }
</style>