import type { FC } from 'react';

import { api } from '@/services/movieServices';

import { useParams } from 'react-router-dom';

import Poster from '@/components/fragments/poster/poster';
import Spinner from '@/components/UI/loaders/spinner/spinner';

const MovieDetailed: FC = () => {
  const params = useParams();

  const {
    data: movie,
    isLoading,
    isFetching,
    error,
  } = api.useGetMovieBySlugQuery(String(params.slug));

  return (
    <>
      <h1 className='font-bold text-3xl text-white mb-5'>Фильм</h1>
      {movie && !isLoading && !isFetching && (
        <div className='flex justify-between mb-20 gap-5'>
          <Poster movie={movie} className='!w-1/5' />
          <div className='bg-neutral-300 w-4/5 rounded-xl p-5'>
            <div className='flex mb-5'>
              <h2 className='font-bold text-2xl w-1/5'>Название фильма</h2>
              <p className='font-bold text-1xl w-4/5'>{movie.original_title}</p>
            </div>
            <hr className='w-9/10 mx-auto border-t-2 mb-5' />
            <div className='flex mb-5'>
              <h2 className='font-bold text-2xl w-1/5'>Сюжет</h2>
              {movie.description ? (
                <p className='text-1xl text-justify w-4/5'>
                  {movie.description}
                </p>
              ) : (
                <p className='text-1xl text-justify w-4/5'>Сюжет не указан</p>
              )}
            </div>
            <hr className='w-9/10 mx-auto border-t-2 mb-5' />
            <div className='flex mb-5'>
              <h2 className='font-bold text-2xl w-1/5'>Режиссер</h2>
              <p className='font-bold text-1xl text-blue-500 w-4/5'>
                {movie.directors?.length > 0
                  ? movie.directors
                      .map((director) => director.full_name)
                      .join(', ')
                  : 'Режиссер не указан'}
              </p>
            </div>
            <hr className='w-9/10 mx-auto border-t-2 mb-5' />
            <div className='flex mb-5'>
              <h2 className='font-bold text-2xl w-1/5'>Страна</h2>
              <p className='font-bold text-1xl text-blue-500 w-4/5'>
                {movie.countries?.map((country) => country.name).join(', ')}
              </p>
            </div>
            <hr className='w-9/10 mx-auto border-t-2 mb-5' />
            <div className='flex mb-5'>
              <h2 className='font-bold text-2xl w-1/5'>Дата выхода</h2>
              <p className='font-bold text-1xl w-4/5'>{movie.release_date}</p>
            </div>
            <hr className='w-9/10 mx-auto border-t-2 mb-5' />
            <div className='flex mb-5'>
              <h2 className='font-bold text-2xl w-1/5'>
                Ограничение по возрасту
              </h2>
              <p className='font-bold text-1xl w-4/5'>{movie.age_limit}+</p>
            </div>
          </div>
        </div>
      )}
      {!movie && !error && <h2>Информация не найдена</h2>}
      {isLoading && <Spinner />}
      {isFetching && !isLoading && <Spinner />}
      {error && !isLoading && !isFetching && (
        <p className='text-red-500 text-center'>Ошибка загрузки данных</p>
      )}
    </>
  );
};

export default MovieDetailed;
