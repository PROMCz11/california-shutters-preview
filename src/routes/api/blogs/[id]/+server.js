import { json } from '@sveltejs/kit';

export const GET = async ({ platform, params }) => {
	try {
		const { id } = params;
		let blogById = (await platform.env.DB.prepare(`SELECT * FROM blogs where blogID = ${id}`).all())
			.results;
		return json({ status: true, data: { blog:blogById.blog } });
	} catch (error) {
		return json({ status: false, message: error.message });
	}
};
