import axios from 'axios';
import {
  INewUserCredentials,
  IUserCredentials,
  ILoginResponse,
} from '../types/types';

const BASE_URL = '/api/auth';

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

api.defaults.headers.common['Content-Type'] = 'application/json';

export const refreshAccessTokenFn = async () => {
  const response = await api.get<ILoginResponse>('/refresh');
  return response.data;
};

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const errMessage = error.response.data.message as string;
    if (errMessage.includes('Unauthorized') && !originalRequest._retry) {
      originalRequest._retry = true;
      const accessToken = await refreshAccessTokenFn();
      localStorage.setItem('accessToken', JSON.stringify(accessToken));
      return api(originalRequest);
    }
    return Promise.reject(error);
  },
);

export const registerUser = async (creds: INewUserCredentials) => {
  const res = await api.post('/register', creds);
  return res.data;
};

export const loginUser = async (creds: IUserCredentials) => {
  const res = await api.post('/login', creds);
  return res.data;
};
