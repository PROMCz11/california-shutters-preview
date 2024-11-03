import { json } from "@sveltejs/kit";

export const GET = async () => {
    const dataFromDB = await platform.env.DB.prepare("SELECT * FROM blog");
    if(!dataFromDB) {
        return json({ status: false });
    }
    return json({ status: true, data: dataFromDB});
}