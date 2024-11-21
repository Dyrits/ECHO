export type User = {
  id: string;
  name: string;
  avatar: string;
};

export type Echo = {
  id: string;
  author: User;
  date: Date;
  content: string;
  likes: number;
  murmurs: Echo[];
};
