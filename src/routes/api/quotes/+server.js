import { json } from '@sveltejs/kit';

export const GET = async ({ platform }) => {
	try {
		let allQuotes = (await platform.env.DB.prepare(`SELECT * FROM quotes`).all()).results;
		return json({ status: true, data: { allQuotes } });
	} catch (error) {
		return json({ status: false, message: error.message });
	}
};
