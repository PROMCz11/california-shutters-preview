import { json } from '@sveltejs/kit';
import { adminSchema } from "../../../../lib/backend/schemas.js";
import jwt from '@tsndr/cloudflare-worker-jwt';
import bcrypt from 'bcryptjs';
import { JWT_SECRET } from '$env/static/private';

export const POST = async ({ request, platform, cookies }) => {
	try {
		const data = await request.json();
		const { error, value } = adminSchema.validate(data);
		if (error) {
			throw new Error(error.details[0].message);
		}
		const admin = (
			await platform.env.DB.prepare(`SELECT * FROM admins where email = "${value.email}"`).all()
		).results;
		if (admin.length > 0) {
			if (bcrypt.compareSync(value.password, admin[0].password)) {
				const authToken =await jwt.sign({ email: data.email }, JWT_SECRET, {
					expiresIn: 1000 * 60 * 60 * 24 * 30
				});
				cookies.set('sessionToken', `Bearer ${authToken}`, {
					path: '/',
					httpOnly: true,
					secure: true,
					sameSite: 'strict',
					maxAge: 60 * 60 * 24 * 30
				});
				return json({ status: true, data: null });
			}
		}
		throw new Error('Invalid email or password');
	} catch (error) {
		return json({ status: false, message: error.message });
	}
};