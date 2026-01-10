import type { FC } from 'react';

import DirectorItem from '../directorItem/directorItem';

import RegularButton from '@/components/UI/buttons/regularButton/regularButton';

const DirectorList: FC = () => {
  return (
    <>
      <section className='mb-15'>
        <div className='flex items-center mb-5'>
          <h2 className='font-bold text-3xl text-white mr-2'>Режиссёры</h2>
          <select className='bg-neutral-300 text-black px-3 rounded-xl text-2xl cursor-pointer'>
            <option>Выбор 1</option>
            <option>Выбор 2</option>
            <option>Выбор 3</option>
          </select>
        </div>
        <div className='flex gap-2 mb-5'>
          <select className='bg-neutral-300 text-black px-3 rounded-xl text-2xl cursor-pointer'>
            <option>Выбор 1</option>
            <option>Выбор 2</option>
            <option>Выбор 3</option>
          </select>
          <select className='bg-neutral-300 text-black px-3 rounded-xl text-2xl cursor-pointer'>
            <option>Выбор 1</option>
            <option>Выбор 2</option>
            <option>Выбор 3</option>
          </select>
          <select className='bg-neutral-300 text-black px-3 rounded-xl text-2xl cursor-pointer'>
            <option>Выбор 1</option>
            <option>Выбор 2</option>
            <option>Выбор 3</option>
          </select>
          <select className='bg-neutral-300 text-black px-3 rounded-xl text-2xl cursor-pointer'>
            <option>Выбор 1</option>
            <option>Выбор 2</option>
            <option>Выбор 3</option>
          </select>
          <select className='bg-neutral-300 text-black px-3 rounded-xl text-2xl cursor-pointer'>
            <option>Выбор 1</option>
            <option>Выбор 2</option>
            <option>Выбор 3</option>
          </select>
          <RegularButton>Пять звезд</RegularButton>
          <RegularButton>Рекомендовано</RegularButton>
        </div>
        <p className='text-1xl text-blue-500 mb-5 cursor-pointer'>
          Сбросить фильтры
        </p>
        <ul className='flex flex-wrap gap-8'>
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
        </ul>
      </section>
    </>
  );
};

export default DirectorList;
