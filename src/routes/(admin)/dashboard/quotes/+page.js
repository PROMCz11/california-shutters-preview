export const load = async ({ fetch }) => {
    const res = await fetch("api/quotes");
    const quotesData = await res.json();
    const status = quotesData.status;
    if(!status) {
        // Throw a redirect to the login page
        return;
    }
    const quotes = quotesData.data.allQuotes;
    return {quotes};
}