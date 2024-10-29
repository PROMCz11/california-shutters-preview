export const load = async () => {
    const delay = new Promise(res => {
        setTimeout(() => {
            res();
        }, 1000);
    })

    await delay;
    return {response: "Data"} 
}