import api from "@/api.json";
import axios from "axios";
import { BookListInterface } from "@/interfaces/book/book-list.interface";
import { BookInterface } from "@/interfaces/book/book.interface";
import { CategoryInterface } from "@/interfaces/category/category.interface";

export const BookService = {
  async getAllBooks() {
    const { data } = await axios.get<BookListInterface>(`${api.api}/library/`);
    return data;
  },

  async getAllCategory() {
    const { data } = await axios.get<CategoryInterface[]>(
      `${api.api}/library/categories/`,
    );
    return data;
  },

  async getBookBySlug(slug: string) {
    const { data } = await axios.get<BookInterface>(
      `${api.api}/library/${slug}/`,
    );
    return data;
  },

  async getCategoryBySlug(slug: string) {
    const { data } = await axios.get<CategoryInterface>(
      `${api.api}/library/categories/${slug}/`,
    );
    return data;
  },
};
