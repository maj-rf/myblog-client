import { IBlog } from '../types/types';
import { apiSlice } from './apiSlice';

export const blogsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query<IBlog[], void>({
      query: () => 'blogs',
      providesTags: ['Blog'],
    }),
    getBlog: builder.query<IBlog, string>({
      query: (id) => `blogs/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllBlogsQuery, useGetBlogQuery } = blogsApiSlice;
