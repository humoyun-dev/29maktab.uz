import {CommentInterface} from "@/interfaces/comment.interface";

export interface BlogInterface {
  id: number;
  title: string;
  content: string;
  comment: CommentInterface[];
  slug: string;
  image: string;
  video: string;
}