import jwt from '@tsndr/cloudflare-worker-jwt';
import { JWT_SECRET } from '$env/static/private';
import { json, redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
	if (
		event.url.pathname.startsWith('/api/blogs/create') ||
		event.url.pathname.startsWith('/api/blogs/update') ||
		event.url.pathname.startsWith('/api/blogs/delete') ||
		event.url.pathname.startsWith('/api/admin/account') ||
		(event.url.pathname.startsWith('/api/quotes') && event.url.pathname !== '/api/quotes/send')
	) {
		try {
			if (event.cookies.get('sessionToken')) {
				const authToken = event.cookies.get('sessionToken').split(' ')[1];
				const { payload } = await jwt.verify(authToken, JWT_SECRET);
				const admin = (
					await event.platform.env.DB.prepare(
						`SELECT * FROM admins where email="${payload.email}"`
					).all()
				).results[0];

				if (admin) {
					event.locals.email = payload.email;
					if (event.url.pathname.startsWith('/api/quotes') && admin.role != 'superAdmin')
						return json({ status: false, message: 'invalid token' });
					const response = await resolve(event);
					return response;
				}
			}
			throw new Error('invalid token');
		} catch {
			return json({ status: false, message: 'invalid token' });
		}
	}

	else if (event.url.pathname.startsWith('/dashboard') && event.url.pathname !== '/dashboard/login') {
		// console.log("Restricted Route");
		if(!event.cookies.get('sessionToken')) {
			throw redirect(303, "/dashboard/login");
		}
	}
	const response = await resolve(event);
	return response;
}
