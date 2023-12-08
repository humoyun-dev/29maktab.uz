import { BlogInterface } from "@/interfaces/blog.interface";
import api from "@/api.json";

export const BlogService = {
  async getAllBlogs() {
    const { data } = await axios.get<BlogInterface[]>(`${api.api}/blogs/`);
    return data;
  },
  async getBlogsBySlug(slug: string) {
    const { data } = await axios.get<BlogInterface>(`${api.api}/blog/${slug}/`);
    return data;
  },
};
