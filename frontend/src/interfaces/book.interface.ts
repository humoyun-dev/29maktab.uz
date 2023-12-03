import { CommentInterface } from "@/interfaces/comment.interface";

export interface BookInterface {
  id: number;
  slug: string;
  name: string;
  author: string;
  isbn: string;
  description: string;
  category: number;
  comment: CommentInterface[];
}
