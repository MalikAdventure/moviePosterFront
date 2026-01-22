import type { FC } from 'react';
import { useEffect, useRef } from 'react';

import { api } from '@/services/movieServices';

import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import { setMoviesCursor } from '@/store/reducers/moviesPaginationSlice';

import Spinner from '@/components/UI/loaders/spinner/spinner';
import MovieItem from '../movieItem/movieItem';

import RegularButton from '@/components/UI/buttons/regularButton/regularButton';

const MovieList: FC = () => {
  const dispatch = useAppDispatch();
  const { currentCursor } = useAppSelector(
    (state) => state.moviesPaginationReducer,
  );

  const { data, isLoading, isFetching, error } =
    api.useGetAllMoviesQuery(currentCursor);

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && data?.next && !isFetching) {
          dispatch(setMoviesCursor(data.next));
        }
      },
      { threshold: 0.1 },
    );
    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [data?.next, isFetching, dispatch]);

  const movies = data?.results || [];

  //   // При клике на "Сбросить фильтры"
  //   const handleReset = () => {
  //     dispatch(setMoviesCursor(null));
  // или
  // resetMoviesPagination - в slice
  //     // Также можно вызвать api.util.resetApiState() для полной очистки кэша
  //   };
  //   // ...
  // }

  return (
    <>
      <section className='mb-15'>
        <div className='flex items-center mb-5'>
          <h2 className='font-bold text-3xl text-white mr-2'>Фильмы</h2>
          <select className='bg-neutral-300 text-black px-3 rounded-xl text-2xl cursor-pointer'>
            <option>Выбор 1</option>
            <option>Выбор 2</option>
            <option>Выбор 3</option>
          </select>
        </div>
        <div className='flex gap-2 mb-5'>
          <select className='bg-neutral-300 text-black px-3 rounded-xl text-2xl cursor-pointer'>
            <option>Выбор 1</option>
            <option>Выбор 2</option>
            <option>Выбор 3</option>
          </select>
          <select className='bg-neutral-300 text-black px-3 rounded-xl text-2xl cursor-pointer'>
            <option>Выбор 1</option>
            <option>Выбор 2</option>
            <option>Выбор 3</option>
          </select>
          <select className='bg-neutral-300 text-black px-3 rounded-xl text-2xl cursor-pointer'>
            <option>Выбор 1</option>
            <option>Выбор 2</option>
            <option>Выбор 3</option>
          </select>
          <select className='bg-neutral-300 text-black px-3 rounded-xl text-2xl cursor-pointer'>
            <option>Выбор 1</option>
            <option>Выбор 2</option>
            <option>Выбор 3</option>
          </select>
          <select className='bg-neutral-300 text-black px-3 rounded-xl text-2xl cursor-pointer'>
            <option>Выбор 1</option>
            <option>Выбор 2</option>
            <option>Выбор 3</option>
          </select>
          <RegularButton>Пять звезд</RegularButton>
          <RegularButton>Рекомендовано</RegularButton>
        </div>
        <p className='text-1xl text-blue-500 mb-5 cursor-pointer'>
          Сбросить фильтры
        </p>
        <ul className='grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5 mb-8'>
          {movies.map((movie) => (
            <MovieItem key={movie.slug} movie={movie} />
          ))}
        </ul>
        {movies?.length === 0 && !error && <p>Информация не найдена</p>}
        <div ref={observerRef} className='w-full flex justify-center'>
          {isLoading && <Spinner />}
          {isFetching && !isLoading && <Spinner />}
          {!data?.next && movies.length > 0 && (
            <p className='text-neutral-500'>Вы просмотрели всю информацию</p>
          )}
        </div>
        {error && !isLoading && !isFetching && (
          <p className='text-red-500 text-center'>Ошибка загрузки данных</p>
        )}
      </section>
    </>
  );
};

export default MovieList;
