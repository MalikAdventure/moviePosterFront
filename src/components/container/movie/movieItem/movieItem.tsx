import type { FC } from 'react';
import type { IMovie } from '@/types/IMovie';

import { useNavigate } from 'react-router-dom';

import Poster from '@/components/fragments/poster/poster';

interface IMovieItem {
  movie: IMovie;
}

const MovieItem: FC<IMovieItem> = ({ movie }) => {
  const navigate = useNavigate();

  const toMovieDetailedPage = () => {
    navigate(`/movie_collection/${movie.slug}`);
  };

  return (
    <>
      <li onClick={toMovieDetailedPage} className='cursor-pointer'>
        <Poster movie={movie} />
      </li>
    </>
  );
};

export default MovieItem;
