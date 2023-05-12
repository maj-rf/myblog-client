import axios, { AxiosError } from 'axios';
import { IGenericResponse, INewUserCredentials } from '../types/types';

const BASE_URL = '/api/auth';

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const registerUser = async (creds: INewUserCredentials) => {
  const res = await axios.post(`${BASE_URL}/register`, creds);
  return res.data;
};
