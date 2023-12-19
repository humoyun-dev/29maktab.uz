import { BookInterface } from "@/interfaces/book/book.interface";

export interface BookListInterface {
  count: number;
  next: string;
  previous: string;
  results: BookInterface[];
}
