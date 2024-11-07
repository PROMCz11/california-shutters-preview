export const load = async ({ fetch, params }) => {
    const blogID = params.slug;
    const res = await fetch(`../../../api/blogs/${blogID}`);
    const blogData = await res.json();
    const status = blogData.status;
    if(!status) {
        return;
    }
    const blog = JSON.parse(blogData.data.blog);
    console.log(blog);
    return {blog};
}