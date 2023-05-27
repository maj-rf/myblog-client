import { IComment } from '../types/types';
import { apiSlice } from './apiSlice';

export const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogComments: builder.query<IComment[], string>({
      query: (id) => `comments/${id}`,
    }),
  }),
});

export const { useGetBlogCommentsQuery } = commentApiSlice;
