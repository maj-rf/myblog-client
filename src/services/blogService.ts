import axios from 'axios';
import { IBlog, INewUserCredentials, IUserCredentials } from '../types/types';

const BASE_URL = '/api/blogs';

export const getAllBlogs = async () => {
  const res = await axios.get<IBlog[]>(BASE_URL);
  return res.data;
};
