import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { IMovie } from '../types/IMovie';

export interface IMoviesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IMovie[];
}

export const api = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/v1',
  }),
  endpoints: (builder) => ({
    getAllMovies: builder.query<IMoviesResponse, string | null>({
      query: (cursor) => ({
        url: '/movieslist/',
        params: cursor
          ? { cursor: new URL(cursor).searchParams.get('cursor') }
          : {},
      }),
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        if (!currentCache) return newItems;
        return {
          ...newItems,
          results: [...currentCache.results, ...newItems.results],
        };
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getMovieBySlug: builder.query<IMovie, string>({
      query: (slug) => ({
        url: `/movieslist/${slug}`,
      }),
    }),
  }),
});
