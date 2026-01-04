import type { FC } from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <section className='mb-15'>
      <h1 className='font-bold text-4xl text-white mb-5'>
        Страница не найдена
      </h1>
      <div className='flex'>
        <p className='mr-2 text-white text-2xl'>Вернитесь пожалуйста</p>
        <Link
          to='#'
          onClick={() => navigate(-1)}
          className='mr-2 text-blue-500 hover:text-blue-700 cursor-pointer text-2xl font-bold'
        >
          НАЗАД
        </Link>
        <p className='mr-2 text-white text-2xl'>или на</p>
        <Link
          to='/'
          className='text-blue-500 hover:text-blue-700 cursor-pointer text-2xl font-bold'
        >
          ГЛАВНУЮ СТРАНИЦУ
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
