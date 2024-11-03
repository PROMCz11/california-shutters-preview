import { json } from "@sveltejs/kit";

export const GET = async () => {
    const dataFromDB = await platform.env.DB.prepare("SELECT * FROM blog");
    return json(dataFromDB);
}