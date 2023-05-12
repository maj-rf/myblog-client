export interface IComment {
  content: string;
  user: string;
  blog: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface IBlog {
  user: string;
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

export interface IGenericResponse {
  message: string | string[];
}

export interface INewUserCredentials {
  username: string;
  email: string;
  password: string;
  confirm_pass: string;
}

export interface IUserCredentials {
  email: string;
  password: string;
}

export type PublicUser = Pick<IUser, 'id' | 'username'>;
