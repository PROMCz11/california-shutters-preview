import { json } from '@sveltejs/kit';

export const GET = async ({ platform }) => {
	try {
		let allBlogs = (await platform.env.DB.prepare(`SELECT * FROM blogs`).all()).results;
		allBlogs = allBlogs.map((item) => ({
			...item,
			blog: JSON.parse(item.blog)
		}));
		allBlogs = allBlogs.map((item) => {
			let newItem = {};
			newItem.blogID = item.blogID;
			newItem.title = item.blog.blogTitle;
			newItem.date = item.blog.rawBlog.time;
			newItem.metaDescription = item.blog.metaDescription;
			return newItem
		});
		return json({ status: true, data: { allBlogs } });
	} catch (error) {
		return json({ status: false, message: error.message });
	}
};
