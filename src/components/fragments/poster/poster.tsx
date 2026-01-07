import type { FC } from 'react';

import posterImg from '@/assets/tempImgs/poster.jpg';

const Poster: FC = () => {
  return (
    <>
      <div className='bg-neutral-300 w-70 h-100 rounded-xl p-2'>
        <img src={posterImg} alt='poster' className='w-70 h-75' />
        <div className='font-bold text-2xl'>Название фильма или сериала</div>
        <p className='text-1xl text-blue-500'>Комедия, ужасы, повседневность</p>
      </div>
    </>
  );
};

export default Poster;
