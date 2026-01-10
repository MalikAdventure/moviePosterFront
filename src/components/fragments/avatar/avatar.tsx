import type { FC } from 'react';

import avatarImg from '@/assets/tempImgs/avatar.png';

const Avatar: FC = () => {
  return (
    <>
      <div className='bg-neutral-300 w-70 h-92 rounded-xl p-2'>
        <img src={avatarImg} alt='poster' className='w-70 h-70 mb-2' />
        <h2 className='font-bold text-2xl'>Фамилия Имя Отчество</h2>
      </div>
    </>
  );
};

export default Avatar;
