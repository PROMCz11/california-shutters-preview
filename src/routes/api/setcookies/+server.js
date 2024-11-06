import { json } from "@sveltejs/kit";

export const GET = async ({ cookies }) => {
	cookies.set('name', `zein shaban`, {
		path: '/',
		httpOnly: true,
		secure: true,
		sameSite: 'strict',
		maxAge: 60 * 60 * 24 * 30
	});
    return json({message:"success"})
};