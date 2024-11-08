import jwt from '@tsndr/cloudflare-worker-jwt';
import { JWT_SECRET } from '$env/static/private';
import { redirect } from "@sveltejs/kit";

export const load = async ({ cookies, platform }) => {
    const token = cookies.get("sessionToken");
    if(!token) {
        throw redirect(303, "/login");
    }
    const authToken = cookies.get('sessionToken').split(' ')[1];
    const { payload } = await jwt.verify(authToken, JWT_SECRET);
    const admin = (
        await platform.env.DB.prepare(
            `SELECT * FROM admins where email="${payload.email}"`
        ).all()
    ).results[0];
    if(!admin) {
        throw redirect(303, "/login");
    }
}