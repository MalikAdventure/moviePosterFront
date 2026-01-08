import type { FC } from 'react';

import { Link } from 'react-router-dom';

import logoImg from '@/assets/imgs/logo.png';

const Navigation: FC = () => {
  return (
    <>
      <div className='flex justify-between items-center container mx-auto'>
        <Link to='/' className='flex items-center'>
          <img className='mr-2 h-9 w-9' src={logoImg} alt='логотип' />
          <p className='mr-2 font-bold text-2xl text-blue-500'>Movie</p>
          <p className='font-bold text-2xl text-blue-800'>Poster</p>
        </Link>
        <div className='flex items-center'>
          <input
            className='bg-neutral-800 text-white px-2 rounded-xl text-xl w-120 h-8'
            placeholder='Поиск'
          />
        </div>
        <nav>
          <ul className='flex gap-10 items-center font-bold text-xl text-blue-500'>
            <li>
              <Link to='/movie_collection'>Фильмы</Link>
            </li>
            <li>
              <Link to='/'>Категории</Link>
            </li>
            <li>
              <Link to='/'>Режиссёры</Link>
            </li>
            <li>
              <Link to='/'>Теги</Link>
            </li>
          </ul>
        </nav>
        <div className='flex items-center font-bold text-xl text-blue-800'>
          <Link to='/login'>Личный кабинет</Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
