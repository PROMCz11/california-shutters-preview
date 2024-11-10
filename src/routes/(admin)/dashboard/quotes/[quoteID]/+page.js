// export const load = async ({ fetch, params }) => {
//     const { quoteID } = params;
//     console.log(quoteID);
//     const res = await fetch(`../../../../api/quotes/${quoteID}`);
//     const quoteData = await res.json();
//     console.log(quoteData);
//     const status = quoteData.status;
//     if(!status) {
//         console.log("didn't work", quoteData.message);
//         return;
//     }
//     const quote = quoteData.data.quote;
//     return {quote};
// }