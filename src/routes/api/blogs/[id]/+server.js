import { json } from '@sveltejs/kit';

export const GET = async ({ platform, params }) => {
	try {
		const { id } = params;
		let allBlogs = (await platform.env.DB.prepare(`SELECT * FROM blogs where id = ${id}`).all())
			.results;
		return json({ status: true, data: { allBlogs } });
	} catch (error) {
		return json({ status: false, message: error.message });
	}
};
