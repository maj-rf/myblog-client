import { IBlog } from '../types/types';
import { apiSlice } from './apiSlice';

export const blogsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query<IBlog[], void>({
      query: () => 'blogs/all',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Blog' as const, id })),
              { type: 'Blog', id: 'LIST' },
            ]
          : [{ type: 'Blog', id: 'LIST' }],
    }),
    getBlog: builder.query<IBlog, string>({
      query: (id) => `blogs/blog/${id}`,
    }),
    getProfileBlogs: builder.query<IBlog[], void>({
      query: () => 'blogs/profile',
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllBlogsQuery, useGetBlogQuery, useGetProfileBlogsQuery } =
  blogsApiSlice;
