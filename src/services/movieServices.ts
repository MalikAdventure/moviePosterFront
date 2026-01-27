import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { IMovie } from '@/types/IMovie';
import type { IDirector } from '@/types/IDirector';
import type { ICategory } from '@/types/ICategory';

export interface IMoviesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IMovie[];
}

export interface IFilterState {
  cursor: string | null;
  genres: string | null;
  tags: string | null;
  ordering: string | null;
}

export interface IGenresResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IGenre[];
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IMovieTagsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IMovieTag[];
}

export interface IMovieTag {
  id: number;
  tag: string;
}

export interface ICategoryResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ICategory[];
}

export const api = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/v1',
  }),
  endpoints: (builder) => ({
    getAllMovies: builder.query<IMoviesResponse, IFilterState>({
      query: (filters) => ({
        url: '/movieslist/',
        params: {
          cursor: filters.cursor || undefined,
          genres: filters.genres || undefined,
          tags: filters.tags || undefined,
          ordering: filters.ordering || undefined,
        },
      }),
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { cursor, ...rest } = queryArgs;
        return `${endpointName}-${JSON.stringify(rest)}`;
      },
      merge: (currentCache, newItems) => {
        if (!newItems.previous) {
          return newItems;
        }
        const existingSlugs = new Set(currentCache.results.map((m) => m.slug));
        const uniqueNewResults = newItems.results.filter(
          (m) => !existingSlugs.has(m.slug),
        );
        currentCache.results.push(...uniqueNewResults);
        currentCache.next = newItems.next;
        currentCache.previous = newItems.previous;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getAllDirectors: builder.query<IMoviesResponse, IFilterState>({
      query: (filters) => ({
        url: '/alldirectorslist/',
        params: {
          cursor: filters.cursor || undefined,
          ordering: filters.ordering || undefined,
        },
      }),
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { cursor, ...rest } = queryArgs;
        return `${endpointName}-${JSON.stringify(rest)}`;
      },
      merge: (currentCache, newItems) => {
        if (!newItems.previous) {
          return newItems;
        }
        const existingSlugs = new Set(currentCache.results.map((m) => m.slug));
        const uniqueNewResults = newItems.results.filter(
          (m) => !existingSlugs.has(m.slug),
        );
        currentCache.results.push(...uniqueNewResults);
        currentCache.next = newItems.next;
        currentCache.previous = newItems.previous;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getAllCategories: builder.query<ICategoryResponse, void>({
      query: () => ({
        url: '/categories/',
      }),
    }),
    getMovieBySlug: builder.query<IMovie, string>({
      query: (slug) => ({
        url: `/movieslist/${slug}`,
      }),
    }),
    getDirectorBySlug: builder.query<IDirector, string>({
      query: (slug) => ({
        url: `/alldirectorslist/${slug}`,
      }),
    }),
    getCategoryBySlug: builder.query<ICategory, string>({
      query: (slug) => ({
        url: `/categories/${slug}`,
      }),
    }),
    getGenres: builder.query<IGenresResponse, void>({
      query: () => '/genres/',
    }),
    getMovieTags: builder.query<IMovieTagsResponse, void>({
      query: () => '/movietags/',
    }),
  }),
});
