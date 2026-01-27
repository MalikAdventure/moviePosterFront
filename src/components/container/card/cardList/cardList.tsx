import type { FC } from 'react';
import { useEffect, useRef } from 'react';

import { api } from '@/services/movieServices';

import { useAppSelector, useAppDispatch } from '@/hooks/redux';

import Filter from '@/components/fragments/filter/filter';
import Spinner from '@/components/UI/loaders/spinner/spinner';
import CardItem from '../cardItem/cardItem';
import {
  setMovieFilter,
  setDirectorFilter,
} from '@/store/reducers/filterSlice';

const CardList: FC = () => {
  const dispatch = useAppDispatch();
  const contextPage = useAppSelector(
    (state) => state.contextReducer.contextPage,
  );
  const { movieFilters, directorFilters } = useAppSelector(
    (state) => state.filterReducer,
  );

  const moviesQuery = api.useGetAllMoviesQuery(movieFilters, {
    skip: contextPage !== 'movieListPage',
  });

  const directorsQuery = api.useGetAllDirectorsQuery(directorFilters, {
    skip: contextPage !== 'directorListPage',
  });

  const categoriesQuery = api.useGetAllCategoriesQuery(undefined, {
    skip: contextPage !== 'categoryListPage',
  });

  let currentQuery;
  if (contextPage === 'movieListPage') {
    currentQuery = moviesQuery;
  } else if (contextPage === 'directorListPage') {
    currentQuery = directorsQuery;
  } else {
    currentQuery = categoriesQuery;
  }

  const { data, isLoading, isFetching, error } = currentQuery;
  const objectList = data?.results || [];

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && data?.next && !isFetching) {
          const nextCursor = new URL(data.next).searchParams.get('cursor');
          const payload = { cursor: nextCursor };
          if (contextPage === 'movieListPage') {
            dispatch(setMovieFilter(payload));
          } else if (contextPage === 'directorListPage') {
            dispatch(setDirectorFilter(payload));
          }
        }
      },
      { threshold: 0.1 },
    );
    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [data?.next, isFetching, dispatch, contextPage]);

  return (
    <>
      <section className='mb-15'>
        <Filter />
        <ul className='grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5 mb-8'>
          {objectList.map((objectItem) => (
            <CardItem key={objectItem.slug} objectItem={objectItem} />
          ))}
        </ul>
        {objectList?.length === 0 && !isLoading && !isFetching && !error && (
          <p className='text-white text-center'>Информация не найдена</p>
        )}
        {(isLoading || isFetching) && <Spinner />}
        {error && !isLoading && !isFetching && (
          <p className='text-red-500 text-center'>Ошибка загрузки данных</p>
        )}
        <div ref={observerRef} className='w-full flex justify-center'>
          {!data?.next &&
            objectList.length > 0 &&
            contextPage !== 'categoryListPage' && (
              <p className='text-neutral-500'>Вы просмотрели всю информацию</p>
            )}
        </div>
      </section>
    </>
  );
};

export default CardList;
