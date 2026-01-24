import type { FC } from 'react';
import type { IMovie } from '@/types/IMovie';
import type { IDirector } from '@/types/IDirector';

import posterImg from '@/assets/imgs/poster.png';

interface IPoster {
  objectItem: IMovie | IDirector;
  className?: string;
}

const Poster: FC<IPoster> = ({ objectItem, className }) => {
  const isMovie = 'original_title' in objectItem;

  const name =
    'original_title' in objectItem
      ? objectItem.original_title
      : objectItem.full_name;

  const img = 'poster' in objectItem ? objectItem.poster : null;

  return (
    <>
      <div
        className={`bg-neutral-300 w-full h-full rounded-xl p-2 ${className}`}
      >
        {img ? (
          <img
            src={img}
            alt='poster'
            className='w-70 h-75 object-cover rounded-lg'
          />
        ) : (
          <img
            src={posterImg}
            alt='poster'
            className='w-70 h-75 object-cover rounded-lg'
          />
        )}
        <div
          className='font-bold text-2xl line-clamp-2 break-words mt-2'
          title={name}
        >
          {name}
        </div>
        {isMovie ? (
          <>
            <p className='text-1xl text-blue-500 line-clamp-1'>
              {objectItem.genres?.map((genre) => genre.name).join(', ')}
            </p>
            <p className='text-1xl text-gray-600'>{objectItem.release_date}</p>
            <p className='text-1xl text-blue-500 italic'>
              {objectItem.tags?.map((tag) => tag.tag).join(' ')}
            </p>
          </>
        ) : (
          <>
            <p className='text-1xl text-gray-600'>
              Дата рождения: {objectItem.date_of_birth}
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Poster;
