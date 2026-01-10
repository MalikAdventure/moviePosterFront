import type { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import tagImg from '@/assets/tempImgs/tag.jpg';

const CategoryItem: FC = () => {
  const navigate = useNavigate();

  const toMovieCollectionPage = () => {
    navigate(`/movie_collection`);
  };

  return (
    <>
      <li
        onClick={toMovieCollectionPage}
        className='bg-neutral-300 w-1/7 h-50 rounded-xl p-2 cursor-pointer'
      >
        <img src={tagImg} alt='плитка' className='w-full mb-2' />
        <h3 className='font-bold text-2xl'>Название категории</h3>
      </li>
    </>
  );
};

export default CategoryItem;
