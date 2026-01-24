import type { FC } from 'react';
import { useEffect, useRef } from 'react';

import { api } from '@/services/movieServices';

import { useAppSelector, useAppDispatch } from '@/hooks/redux';

import Filter from '@/components/fragments/filter/filter';
import Spinner from '@/components/UI/loaders/spinner/spinner';
import MovieItem from '../movieItem/movieItem';
import { setFilter } from '@/store/reducers/filterSlice';

const MovieList: FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filterReducer);

  const { data, isLoading, isFetching, error } =
    api.useGetAllMoviesQuery(filters);
  const movies = data?.results || [];

  const observerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && data?.next && !isFetching) {
          const nextCursor = new URL(data.next).searchParams.get('cursor');
          dispatch(setFilter({ cursor: nextCursor }));
        }
      },
      { threshold: 0.1 },
    );
    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [data?.next, isFetching, dispatch]);

  //* очистка курсора и загрузка данных с нуля
  // useEffect(() => {
  //   return () => {
  //     dispatch(setFilter({ cursor: undefined }));
  //   };
  // }, [dispatch]);

  return (
    <>
      <section className='mb-15'>
        <Filter />
        <ul className='grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5 mb-8'>
          {movies.map((movie) => (
            <MovieItem key={movie.slug} movie={movie} />
          ))}
        </ul>
        {movies?.length === 0 && !isLoading && !error && (
          <p className='text-white text-center'>Информация не найдена</p>
        )}
        {isLoading && <Spinner />}
        {isFetching && !isLoading && <Spinner />}
        {error && !isLoading && !isFetching && (
          <p className='text-red-500 text-center'>Ошибка загрузки данных</p>
        )}
        <div ref={observerRef} className='w-full flex justify-center'>
          {!data?.next && movies.length > 0 && (
            <p className='text-neutral-500'>Вы просмотрели всю информацию</p>
          )}
        </div>
      </section>
    </>
  );
};

export default MovieList;
