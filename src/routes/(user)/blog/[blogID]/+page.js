export const load = async ({ fetch, params }) => {
    const blogID = params.slug;
    const res = await fetch(`../../../api/blogs/${blogID}`);
    const blogData = await res.json();
    console.log(blogData);
    console.log("working");
    const status = blogData.status;
    if(!status) {
        return;
    }
    const blog = JSON.parse(blogData.data.blog);
    return {blog};
}