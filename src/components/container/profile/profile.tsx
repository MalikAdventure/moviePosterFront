import type { FC } from 'react';

import Avatar from '@/components/fragments/avatar/avatar';

import AttractiveButton from '@/components/UI/buttons/attractiveButton/attractiveButton';
import ImportantButton from '@/components/UI/buttons/importantButton/importantButton';

const Profile: FC = () => {
  return (
    <>
      <section>
        <h2 className='font-bold text-3xl text-white mb-5'>Профиль</h2>
        <div className='flex justify-between mb-20'>
          <Avatar />
          <div className='bg-neutral-300 w-4/5 rounded-xl p-5'>
            <div className='flex mb-5'>
              <h2 className='font-bold text-2xl w-1/4'>Никнейм</h2>
              <p className='font-bold text-1xl text-blue-500 w-3/4'>Ник</p>
            </div>
            <hr className='w-9/10 mx-auto border-t-2 mb-5' />
            <div className='flex mb-5'>
              <h2 className='font-bold text-2xl w-1/4'>Электронная почта</h2>
              <p className='font-bold text-1xl text-blue-500 w-3/4'>
                email.com
              </p>
            </div>
            <hr className='w-9/10 mx-auto border-t-2 mb-5' />
            <div className='flex mb-5'>
              <h2 className='font-bold text-2xl w-1/4'>Язык</h2>
              <p className='font-bold text-1xl text-blue-500 w-3/4'>Русский</p>
            </div>
            <hr className='w-9/10 mx-auto border-t-2 mb-5' />
            <div className='flex mb-8'>
              <h2 className='font-bold text-2xl w-1/4'>Возраст</h2>
              <p className='font-bold text-1xl text-blue-500 w-3/4'>23 года</p>
            </div>
            <div className='flex gap-5'>
              <AttractiveButton>Редактировать данные</AttractiveButton>
              <ImportantButton>Выйти из аккаунта</ImportantButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
