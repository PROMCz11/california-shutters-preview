export const load = async ({ fetch, params }) => {
    const blogID = params.blogID;
    const res = await fetch(`../../../api/blogs/${blogID}`);
    const blogData = await res.json();
    const status = blogData.status;
    if(!status) {
        return;
    }
    const blog = JSON.parse(blogData.data.blog);
    return {blog};
}