import type { FC, ReactNode } from 'react';
import { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { api } from '@/services/movieServices';

import { useAppSelector, useAppDispatch } from '@/hooks/redux';

import type { IMovie } from '@/types/IMovie';
import type { IDirector } from '@/types/IDirector';

import Poster from '@/components/fragments/poster/poster';
import Spinner from '@/components/UI/loaders/spinner/spinner';

import { setContextPage } from '@/store/reducers/contextSlice';

interface InfoRowProps {
  label: string;
  value: ReactNode;
}

interface SubInfoProps<T> {
  data: T;
  InfoRow: FC<InfoRowProps>;
}

const InfoRow: FC<InfoRowProps> = ({ label, value }) => (
  <>
    <div className='flex mb-5'>
      <p className='font-bold text-2xl w-1/5 text-gray-800'>{label}</p>
      <div className='text-xl w-4/5 text-gray-700'>{value || 'Не указано'}</div>
    </div>
  </>
);

const MovieInfo: FC<SubInfoProps<IMovie>> = ({ data, InfoRow }) => {
  const directorsLinks = data.directors?.map((director, index) => (
    <span key={director.id}>
      <Link
        to={`/director_list/${director.slug}`}
        className='font-bold text-blue-500 hover:text-blue-600 active:text-blue-500 hover:underline'
      >
        {director.full_name}
      </Link>
      {index < data.directors.length - 1 && (
        <span className='text-gray-700'>, </span>
      )}
    </span>
  ));

  return (
    <>
      <div className='font-bold'>
        <InfoRow label='Название' value={data.original_title} />
      </div>
      <hr className='w-9/10 mx-auto border-t-2 border-neutral-400 mb-5' />
      <InfoRow label='Сюжет' value={data.description} />
      <hr className='w-9/10 mx-auto border-t-2 border-neutral-400 mb-5' />
      <InfoRow
        label='Режиссер'
        value={directorsLinks?.length ? directorsLinks : 'Режиссер не указан'}
      />
      <hr className='w-9/10 mx-auto border-t-2 border-neutral-400 mb-5' />
      <InfoRow
        label='Страна'
        value={data.countries?.map((c) => c.name).join(', ')}
      />
      <hr className='w-9/10 mx-auto border-t-2 border-neutral-400 mb-5' />
      <InfoRow label='Дата выхода' value={data.release_date} />
      <hr className='w-9/10 mx-auto border-t-2 border-neutral-400 mb-5' />
      <InfoRow label='Возраст' value={`${data.age_limit}+`} />
    </>
  );
};

const DirectorInfo: FC<SubInfoProps<IDirector>> = ({ data, InfoRow }) => (
  <>
    <InfoRow label='ФИО' value={data.full_name} />
    <hr className='w-9/10 mx-auto border-t-2 border-neutral-400 mb-5' />
    <InfoRow label='Дата рождения' value={data.date_of_birth} />
    <hr className='w-9/10 mx-auto border-t-2 border-neutral-400 mb-5' />
    <InfoRow label='Биография' value='Информация в процессе наполнения' />
  </>
);

const CardDetailed: FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const contextPage = useAppSelector(
    (state) => state.contextReducer.contextPage,
  );
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes('/movie_list/')) {
      dispatch(setContextPage('movieDetailedPage'));
    } else if (pathname.includes('/director_list/')) {
      dispatch(setContextPage('directorDetailedPage'));
    }
  }, [pathname, dispatch]);

  const isMovieContext =
    contextPage === 'movieDetailedPage' && pathname.includes('/movie_list/');
  const isDirectorContext =
    contextPage === 'directorDetailedPage' &&
    pathname.includes('/director_list/');

  const movieQuery = api.useGetMovieBySlugQuery(String(params.slug), {
    skip: !isMovieContext,
  });

  const directorQuery = api.useGetDirectorBySlugQuery(String(params.slug), {
    skip: !isDirectorContext,
  });

  const currentQuery = isMovieContext ? movieQuery : directorQuery;
  const { data: objectItem, isLoading, isFetching, error } = currentQuery;

  if (isLoading || isFetching) return <Spinner />;
  if (error && !isLoading && !isFetching)
    return (
      <p className='text-red-500 text-center mt-10'>Ошибка загрузки данных</p>
    );
  if (!objectItem && !isLoading && !isFetching)
    return (
      <h2 className='text-white text-center mt-10'>Информация не найдена</h2>
    );

  return (
    <div className='p-5'>
      <h1 className='font-bold text-3xl text-white mb-5'>
        {isMovieContext ? 'Информация о фильме' : 'Карточка режиссера'}
      </h1>

      <div className='flex justify-between mb-20 gap-5'>
        <Poster objectItem={objectItem} className='!w-1/5' />
        <div className='bg-neutral-300 w-4/5 rounded-xl p-5'>
          {isMovieContext ? (
            <MovieInfo data={objectItem as IMovie} InfoRow={InfoRow} />
          ) : (
            <DirectorInfo data={objectItem as IDirector} InfoRow={InfoRow} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDetailed;
