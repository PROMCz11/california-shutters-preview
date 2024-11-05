// import jwt from '@tsndr/cloudflare-worker-jwt';
// import { JWT_SECRET } from '$env/static/private';
// import { json } from '@sveltejs/kit';

// export async function handle({ event, resolve }) {
// 	if (
// 		event.url.pathname.startsWith('/api/blogs/create') ||
// 		event.url.pathname.startsWith('/api/blogs/update') ||
// 		event.url.pathname.startsWith('/api/blogs/delete')
// 	) {
// 		try {
// 			console.log(event.cookies)
// 			if (event.cookies.get('sessionToken')) {
// 				const authToken = event.cookies.get('session').split(' ')[1];
// 				const { payload } = await jwt.verify(authToken, JWT_SECRET);
// 				if (
// 					await event.platform.env.DB.prepare(
// 						`SELECT * FROM admins where email="${payload.email}"`
// 					).all()
// 				) {
// 					const response = await resolve(event);
// 					return response;
// 				}
// 			}
// 			throw new Error('invalid token');
// 		} catch {
// 			return json({ status: false, message: 'invalid token' });
// 		}
// 	}
// 	const response = await resolve(event);
// 	return response;
// }