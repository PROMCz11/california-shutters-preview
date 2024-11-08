import { json } from '@sveltejs/kit';

export const GET = async ({ platform, params }) => {
	try {
		const { id } = params;
		let blogById = (await platform.env.DB.prepare(`SELECT * FROM blogs where blogID = ${id}`).all())
			.results[0];
		let recentBlogs = (await platform.env.DB.prepare(`SELECT * FROM blogs WHERE blogID != ${id} ORDER BY blogID DESC LIMIT 2`).all()).results;
		recentBlogs = recentBlogs.map((item) => ({
			...item,
			blog: JSON.parse(item.blog)
		}));
		recentBlogs = recentBlogs.map((item) => {
			let newItem = {};
			newItem.blogID = item.blogID;
			newItem.title = item.blog.blogTitle;
			newItem.date = item.blog.rawBlog.time;
			newItem.blogImgURL = item.blog.blogImgURL;
			newItem.blogImgDesc = item.blog.blogImgDesc;
			return newItem;
		});
		return json({ status: true, data: { blog: blogById.blog,recentBlogs } });
	} catch (error) {
		return json({ status: false, message: error.message });
	}
};
