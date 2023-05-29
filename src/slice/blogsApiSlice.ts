import { IBlog } from '../types/types';
import { apiSlice } from './apiSlice';

export const blogsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRecentBlogs: builder.query<IBlog[], void>({
      query: () => 'blogs/recent',
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
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Blog' as const, id })),
              { type: 'Blog', id: 'LIST' },
            ]
          : [{ type: 'Blog', id: 'LIST' }],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `blogs/blog/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Blog'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetRecentBlogsQuery,
  useGetBlogQuery,
  useGetProfileBlogsQuery,
  useDeleteBlogMutation,
} = blogsApiSlice;
