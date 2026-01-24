import type { FC, ChangeEvent } from 'react';

import { api } from '@/services/movieServices';

import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import { setFilter, resetFilters } from '@/store/reducers/filterSlice';

const Filter: FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filterReducer);

  const { data: genresData } = api.useGetGenresQuery();
  const { data: tagsData } = api.useGetMovieTagsQuery();

  const genres = genresData?.results || [];
  const tags = tagsData?.results || [];

  const handleReset = () => {
    dispatch(resetFilters());
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    dispatch(setFilter({ [name]: value || null, cursor: null }));
  };

  return (
    <>
      <div className='flex items-center mb-5'>
        <h2 className='font-bold text-3xl text-white mr-2'>Фильмы</h2>
        <select
          name='ordering'
          onChange={handleChange}
          value={filters.ordering || ''}
          className='bg-neutral-300 text-black px-3 rounded-xl text-2xl cursor-pointer'
        >
          <option value=''>Выберите сортировку</option>
          <option value='-release_date'>Сначала новые фильмы</option>
          <option value='release_date'>Сначала старые фильмы</option>
        </select>
      </div>
      <div className='flex gap-2 mb-5'>
        <select
          name='genres'
          onChange={handleChange}
          value={filters.genres || ''}
          className='bg-neutral-300 text-black px-3 rounded-xl text-2xl cursor-pointer'
        >
          <option value=''>Все жанры</option>
          {genres?.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>

        <select
          name='tags'
          onChange={handleChange}
          value={filters.tags || ''}
          className='bg-neutral-300 text-black px-3 rounded-xl text-2xl cursor-pointer'
        >
          <option value=''>Все теги</option>
          {tags?.map((tag) => (
            <option key={tag.id} value={tag.id}>
              {tag.tag}
            </option>
          ))}
        </select>
      </div>
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
