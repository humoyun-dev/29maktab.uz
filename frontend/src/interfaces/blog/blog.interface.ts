import { CommentInterface } from "@/interfaces/comment/comment.interface";

export interface BlogInterface {
  id: number;
  title: string;
  content: string;
  slug: string;
  comments: CommentInterface[];
  image: string;
  video: string;
  created_at: string;
}
