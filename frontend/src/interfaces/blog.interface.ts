export interface BlogInterface {
  id: number;
  title: string;
  content: string;
  slug: string;
  image: BlogImageInterface[];
  video: string;
}

interface BlogImageInterface {
  id: number;
  image: string;
}
