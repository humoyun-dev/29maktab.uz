import api from "@/api.json";
import axios from "axios";
import { BlogInterface } from "@/interfaces/blog/blog.interface";

export const SearchServices = {
  async getBlog(search: string) {
    const { data } = await axios.get<BlogInterface[]>(
      `${api.api}/blogs/search/?search=${search}`,
    );
    return data;
  },
};
