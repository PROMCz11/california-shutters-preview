import { json } from '@sveltejs/kit';

export const PATCH = async ({ platform, params }) => {
	try {
		const { id } = params;
        await platform.env.DB.prepare(`UPDATE quotes SET seen = true WHERE quoteID = ${id}`).run()
		return json({ status: true, data: null});
	} catch (error) {
		return json({ status: false, message: error.message });
	}
};
