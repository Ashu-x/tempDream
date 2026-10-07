export type View = "home" | "submit" | "anonymous" | "random";

export type Dream = {
  title: string;
  author: string;
  time: string;
  views: string;
  anonymous: boolean;
  excerpt: string;
  content: string;
  real_life_context: string;
  dreamer_interpretation: string;
};

export type PopularDream = readonly [title: string, reads: string];
