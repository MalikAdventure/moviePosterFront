import type { FC } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '@/assets/imgs/logo.png';

const Header: FC = () => {
  return (
    <header className='bg-orange-600 py-2 mb-15'>
      <div className='flex justify-between container mx-auto'>
        <Link to='/' className='flex items-center'>
          <img className='mr-2' src={logoImg} alt='логотип' />
          <p className='mr-2 font-bold text-4xl text-blue-500'>Movie</p>
          <p className='font-bold text-4xl text-blue-800'>Poster</p>
        </Link>
        <div className='flex items-center'>
          {/* <input className='bg-neutral-800 text-white px-2 py-1 rounded-xl text-2xl w-xl' placeholder='Поиск' /> */}
          <input
            className='bg-neutral-800 text-white px-2 py-1 rounded-xl text-2xl w-1xl'
            placeholder='Поиск'
          />
        </div>
        <div className='flex gap-10 items-center font-bold text-2xl text-blue-500'>
          <Link to='/'>Фильмы</Link>
          <Link to='/'>Категории</Link>
          <Link to='/'>Режиссёры</Link>
          <Link to='/'>Теги</Link>
        </div>
        <div className='flex items-center font-bold text-2xl text-blue-800'>
          <Link to='/'>Личный кабинет</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
