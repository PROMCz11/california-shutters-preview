import { json } from '@sveltejs/kit';

export const GET = async ({ platform,locals }) => {
	try {
		let adminDetails = (await platform.env.DB.prepare(`SELECT email,role FROM admins where email = "${locals.email}"`).all())
			.results[0];
		return json({ status: true, data: { adminDetails} });
	} catch (error) {
		return json({ status: false, message: error.message });
	}
};
