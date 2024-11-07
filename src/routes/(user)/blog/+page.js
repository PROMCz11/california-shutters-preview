export const load = async ({ fetch }) => {
    const res = await fetch("../../api/blogs");
    const blogsData = await res.json();
    const status = blogsData.status;
    // Handle errors
    if(!status) {
        return;
    }
    const blogs = blogsData.data.allBlogs;
    return {blogs};
}