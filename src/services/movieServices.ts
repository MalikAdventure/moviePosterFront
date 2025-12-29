import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getAllBooks: builder.query<any[], any>({
      query: ({ limit = 6, page = 1 }) => ({
        url: '/posts',
        params: { _limit: limit, _page: page },
      }),
    }),
    getBookById: builder.query<any, number>({
      query: (id) => ({
        url: `/posts`,
        params: { id },
      }),
    }),
    getCommentsBookById: builder.query<any, any>({
      query: ({ limit = 2, page = 1, id }) => ({
        url: `/posts/${id}/comments`,
        params: { _limit: limit, _page: page },
      }),
    }),
    getRandomBooks: builder.query<any[], any>({
      query: ({ limit = 5, start = 10 }) => ({
        url: `/posts`,
        params: { _limit: limit, _start: start },
      }),
    }),
    getSearchBookByTitle: builder.query<IBook[], string>({
      query: (title) => ({
        url: `/posts?title_like=${title}`,
        params: { _title: title },
      }),
    }),
  }),
});
