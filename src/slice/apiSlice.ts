import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_URL || '/api' }),
  tagTypes: ['User', 'Blog', 'Comment'],
  endpoints: (builder) => ({}),
});
