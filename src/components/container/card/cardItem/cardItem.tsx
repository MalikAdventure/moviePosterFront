import type { FC } from 'react';
import type { IMovie } from '@/types/IMovie';
import type { IDirector } from '@/types/IDirector';
import type { ICategory } from '@/types/ICategory';

import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '@/hooks/redux';

import Poster from '@/components/fragments/poster/poster';

interface ICardItem {
  objectItem: IMovie | IDirector | ICategory;
}

const CardItem: FC<ICardItem> = ({ objectItem }) => {
  const navigate = useNavigate();
  const contextPage = useAppSelector(
    (state) => state.contextReducer.contextPage,
  );

  const toDetailedPage = () => {
    if (contextPage === 'movieListPage') {
      navigate(`/movie_list/${objectItem.slug}`);
    } else if (contextPage === 'directorListPage') {
      navigate(`/director_list/${objectItem.slug}`);
    } else if (contextPage === 'categoryListPage') {
      navigate(`/category_list/${objectItem.slug}`);
    }
  };

  return (
    <li onClick={toDetailedPage} className='cursor-pointer'>
      <Poster objectItem={objectItem} />
    </li>
  );
};

export default CardItem;
