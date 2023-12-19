import { BlogInterface } from "@/interfaces/blog/blog.interface";

export interface BlogListInterface {
  count: number;
  next: string;
  previous: string;
  results: BlogInterface[];
}
