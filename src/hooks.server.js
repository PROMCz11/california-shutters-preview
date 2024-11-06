import jwt from '@tsndr/cloudflare-worker-jwt';
import { JWT_SECRET } from '$env/static/private';
import { json } from '@sveltejs/kit';
//import { redirect } from '@sveltejs/kit';

const protectedRoutes = ['/api/blogs/create', '/api/blogs/update', '/api/blogs/delete'];

export async function handle({ event, resolve }) {
	if (protectedRoutes.some((route) => event.url.pathname.startsWith(route))) {
		const sessionToken = event.cookies.get('sessionToken');
		if (!sessionToken) {
			return json({ status: false, message: 'invalid token' });
		}

		try {
			const authToken = sessionToken.split(' ')[1];
			const { payload } = await jwt.verify(authToken, JWT_SECRET);
			const adminExists = (
				await event.platform.env.DB.prepare(`SELECT * FROM admins WHERE email = ?`)
					.bind(payload.email)
					.all()
			).results;
			if (adminExists) {
				return await resolve(event);
			}
			throw new Error('invalid token');
		} catch {
			return json({ status: false, message: 'invalid token' });
			// TO DO
			// redirect
		}
	}
}
