import type { FC } from 'react';
import type { IMovie } from '@/types/IMovie';

import posterImg from '@/assets/imgs/poster.png';

interface IPoster {
  movie: IMovie;
  className?: string;
}

const Poster: FC<IPoster> = ({ movie, className }) => {
  return (
    <>
      <div
        className={`bg-neutral-300 w-full h-full rounded-xl p-2 ${className}`}
      >
        {movie.poster ? (
          <img src={movie.poster} alt='poster' className='w-70 h-75' />
        ) : (
          <img src={posterImg} alt='poster' className='w-70 h-75' />
        )}
        <div
          className='font-bold text-2xl truncate'
          title={movie.original_title}
        >
          {movie.original_title}
        </div>
        <p className='text-1xl text-blue-500'>
          {movie.genres?.map((genre) => genre.name).join(', ')}
        </p>
        <p className='text-1xl text-blue-500'>
          {movie.tags?.map((tag) => tag.tag).join(', ')}
        </p>
        <p className='text-1xl text-blue-500'>{movie.release_date}</p>
      </div>
    </>
  );
};

export default Poster;
