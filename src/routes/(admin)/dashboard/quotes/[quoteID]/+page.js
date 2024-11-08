export const load = async ({ fetch, params }) => {
    const { quoteID } = params;
    const res = await fetch(`../../../../api/quotes/${quoteID}`);
    const quoteData = await res.json();
    const status = quoteData.status;
    if(!status) {
        return;
    }
    const quote = quoteData.data.quote;
    return {quote};
}