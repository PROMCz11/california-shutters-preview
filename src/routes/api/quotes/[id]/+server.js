import { json } from '@sveltejs/kit';

export const GET = async ({ platform, params }) => {
	try {
		const { id } = params;
        await platform.env.DB.prepare(`UPDATE quotes SET seen = true WHERE quoteID = ${id}`).run()
		let quoteById = (await platform.env.DB.prepare(`SELECT * FROM quotes where quoteID = ${id}`).all())
			.results[0];
        // eslint-disable-next-line no-unused-vars
        const {seen,...quoteDetails}=quoteById
		return json({ status: true, data: { quote:quoteDetails} });
	} catch (error) {
		return json({ status: false, message: error.message });
	}
};
