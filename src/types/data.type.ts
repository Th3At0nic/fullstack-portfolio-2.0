export type TProject = {
  _id: string;
  title: string;
  thumbnail: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  frontendRepo: string;
  backendRepo: string;
  liveBackendUrl: string;
  deploymentPlatform: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TBlog = {
  _id: string;
  title: string;
  thumbnail: string;
  category: string;
  shortDescription: string;
  content: string;
  author: string;
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
  __v?: number; // optional, usually for Mongoose version key
};

export type TCertificate = {
  _id: string;
  title: string;
  platform: string;
  duration: string;
  certificateUrl: string;
  completedAt: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
