import { BlogInterface } from "@/interfaces/blog/blog.interface";
import api from "@/api.json";
import axios from "axios";
import { BlogListInterface } from "@/interfaces/blog/blog-list.interface";

export const BlogService = {
  async getAllBlogs() {
    const { data } = await axios.get<BlogListInterface>(`${api.api}/blogs/`);
    return data;
  },
  async getBlogsBySlug(slug: string) {
    const { data } = await axios.get<BlogInterface>(
      `${api.api}/blogs/${slug}/`,
    );
    return data;
  },
};
