import { json } from '@sveltejs/kit';

export const GET = async ({ platform }) => {
	try {
		let allBlogs = (await platform.env.DB.prepare(`SELECT * FROM blogs`).all()).results;
		return json({ status: true, data: { allBlogs:JSON.parse(allBlogs) } });
	} catch (error) {
		return json({ status: false, message: error.message });
	}
};
