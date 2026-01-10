import type { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import Poster from '@/components/fragments/poster/poster';

const MovieItem: FC = () => {
  const navigate = useNavigate();

  const toMovieDetailedPage = () => {
    navigate(`/movie_collection/slug`);
  };

  return (
    <>
      <li onClick={toMovieDetailedPage} className='cursor-pointer'>
        <Poster />
      </li>
    </>
  );
};

export default MovieItem;
