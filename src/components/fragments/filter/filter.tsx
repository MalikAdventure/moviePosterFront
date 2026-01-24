import type { FC, ChangeEvent } from 'react';

import { api } from '@/services/movieServices';

import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import {
  setMovieFilter,
  setDirectorFilter,
  resetMovieFilters,
  resetDirectorFilters,
} from '@/store/reducers/filterSlice';

const Filter: FC = () => {
  const dispatch = useAppDispatch();
  const contextPage = useAppSelector(
    (state) => state.contextReducer.contextPage,
  );

  const isMoviePage = contextPage === 'movieListPage';

  const allFilters = useAppSelector((state) => state.filterReducer);
  const currentFilters = isMoviePage
    ? allFilters.movieFilters
    : allFilters.directorFilters;

  const { data: genresData } = api.useGetGenresQuery(undefined, {
    skip: !isMoviePage,
  });
  const { data: tagsData } = api.useGetMovieTagsQuery(undefined, {
    skip: !isMoviePage,
  });

  const genres = genresData?.results || [];
  const tags = tagsData?.results || [];

  const handleReset = () => {
    if (isMoviePage) {
      dispatch(resetMovieFilters());
    } else {
      dispatch(resetDirectorFilters());
    }
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const payload = { [name]: value || null, cursor: null };

    if (isMoviePage) {
      dispatch(setMovieFilter(payload));
    } else {
      dispatch(setDirectorFilter(payload));
    }
  };

  return (
    <>
      <div className='flex items-center mb-5'>
        <h2 className='font-bold text-3xl text-white mr-2'>
          {isMoviePage ? 'Фильмы' : 'Режиссеры'}
        </h2>
        <select
          name='ordering'
          onChange={handleChange}
          value={currentFilters.ordering || ''}
          className='bg-neutral-300 text-black px-3 rounded-xl text-2xl cursor-pointer'
        >
          <option value=''>Выберите сортировку</option>
          {isMoviePage && (
            <>
              <option value='-time_created'>Сначала новое</option>
              <option value='time_created'>Сначала старое</option>
              <option value='-release_date'>По дате выхода (новые)</option>
            </>
          )}
          {!isMoviePage && (
            <>
              <option value='-date_of_birth'>Молодые</option>
              <option value='date_of_birth'>Старые</option>
            </>
          )}
        </select>
      </div>
      {isMoviePage && (
        <div className='flex gap-2 mb-5'>
          <select
            name='genres'
            onChange={handleChange}
            value={currentFilters.genres || ''}
            className='bg-neutral-300 text-black px-3 rounded-xl text-2xl cursor-pointer'
          >
            <option value=''>Все жанры</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
          <select
            name='tags'
            onChange={handleChange}
            value={currentFilters.tags || ''}
            className='bg-neutral-300 text-black px-3 rounded-xl text-2xl cursor-pointer'
          >
            <option value=''>Все теги</option>
            {tags.map((tag) => (
              <option key={tag.id} value={tag.id}>
                {tag.tag}
              </option>
            ))}
          </select>
        </div>
      )}
      <p
        onClick={handleReset}
        className='text-1xl text-blue-500 mb-5 cursor-pointer'
      >
        Сбросить фильтры
      </p>
    </>
  );
};

export default Filter;
