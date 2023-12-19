import { CommentInterface } from "@/interfaces/comment/comment.interface";

export interface BookInterface {
  id: number;
  slug: string;
  name: string;
  author: string;
  isbn: string;
  description: string;
  category_slug: string;
  category_name: string;
  book_file: string;
  cover_image: string;
  comments: CommentInterface[];
}
