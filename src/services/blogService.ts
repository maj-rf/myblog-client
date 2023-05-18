import axios from 'axios';
import { IBlog } from '../types/types';

const BASE_URL = '/api/blogs';

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// const item = localStorage.getItem('accessToken') || null;
// const token = !item ? null : JSON.parse(item);

// const config = {
//   headers: { Authorization: `Bearer ${token.accessToken}` },
// };

export const getAllBlogs = async () => {
  const res = await api.get<IBlog[]>('/');
  return res.data;
};
