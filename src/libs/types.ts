export interface PostTypes {
  id: string;
  title: string;
  description: string | null; // Allow null for description
  image: string | null;
  source: string | null;
  demo: string | null;
  content: string | null;
  authorId: string;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface RegisterParams {
  name: string
  email: string
  password: string
}

export interface LoginParams {
  email: string
  password: string
}