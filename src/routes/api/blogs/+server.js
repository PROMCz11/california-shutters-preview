import { json } from '@sveltejs/kit';

export const GET = async ({ platform }) => {
	try {
		let allBlogs = (await platform.env.DB.prepare(`SELECT * FROM blogs`).all()).results;
		const transformedBlogs = allBlogs.map(item => ({
			...item,
			blog: JSON.parse(item.blog)
		  }));
				  return json({ status: true, data: { allBlogs:transformedBlogs } });
	} catch (error) {
		return json({ status: false, message: error.message });
	}
};
