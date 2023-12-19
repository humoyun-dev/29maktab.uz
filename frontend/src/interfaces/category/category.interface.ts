import { BookInterface } from "@/interfaces/book/book.interface";

export interface CategoryInterface {
  id: number;
  category_name: string;
  category_slug: string;
  books: BookInterface[];
}
