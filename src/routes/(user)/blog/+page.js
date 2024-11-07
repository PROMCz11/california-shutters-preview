export const load = async ({ fetch }) => {
    const res = await fetch("../../api/blogs");
    const blogsData = await res.json();
    const blogs = blogsData.allBlogs;
    // Handle errors
    return {blogs};
}