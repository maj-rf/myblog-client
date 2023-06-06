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
      providesTags: [{ type: 'Blog', id: 'LIST' }],
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
      invalidatesTags: (result, error, arg) => [
        { type: 'Blog', id: arg.id },
        { type: 'Comment', id: 'LIST' },
      ],
    }),
    updateBlog: builder.mutation({
      query: ({ id, data }) => ({
        url: `blogs/blog/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: [{ type: 'Blog', id: 'LIST' }],
    }),
    createBlog: builder.mutation({
      query: (data) => ({
        url: 'blogs/blog/',
        method: 'POST',
        body: data,
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
  useUpdateBlogMutation,
  useCreateBlogMutation,
} = blogsApiSlice;
