export interface IComment {
  content: string;
  user: {
    username: string;
  };
  blog: string; // blogId
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface IBlog {
  user: {
    username: string;
  };
  title: string;
  content: string;
  published: boolean;
  tags: string[];
  comments: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUser {
  username: string;
  email: string;
  password: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface IRecentComment {
  content: string;
  user: {
    username: string;
  };
  blog: {
    id: string;
    title: string;
  }; // blogId
  id: string;
  createdAt: string;
  updatedAt: string;
}

export type PublicUser = Pick<IUser, 'id' | 'username' | 'email'>;
