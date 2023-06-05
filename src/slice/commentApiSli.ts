import { IComment, IRecentComment } from '../types/types';
import { apiSlice } from './apiSlice';

export const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogComments: builder.query<IComment[], string>({
      query: (id) => `comments/${id}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Comment' as const, id })),
              { type: 'Comment', id: 'LIST' },
            ]
          : [{ type: 'Comment', id: 'LIST' }],
    }),
    addComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `comments/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Comment'],
    }),
    getRecentComments: builder.query<IRecentComment[], void>({
      query: () => 'comments/recent',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Comment' as const, id })),
              { type: 'Comment', id: 'LIST' },
            ]
          : [{ type: 'Comment', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetBlogCommentsQuery,
  useAddCommentMutation,
  useGetRecentCommentsQuery,
} = commentApiSlice;
