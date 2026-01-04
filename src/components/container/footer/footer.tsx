import type { FC } from 'react';

import Navigation from '@/components/fragments/navigation/navigation';
import Support from '@/components/fragments/support/support';

const Footer: FC = () => {
  return (
    <footer className='bg-neutral-500 py-2'>
      <div className='mb-8'>
        <Navigation />
      </div>
      <div className='flex justify-between gap-40 container mx-auto text-white'>
        <div className='max-w-150'>
          <h3 className='font-bold text-3xl mb-5'>О проекте</h3>
          <p className='text-2xl'>
            Данный веб-сайт является тестовой разработкой с использованием
            React, Redux, Vite, Django и Tailwind CSS
          </p>
        </div>
        <div>
          <h3 className='font-bold text-3xl mb-5'>Об авторе</h3>
          <div className='font-bold text-2xl mb-2 text-blue-500'>
            <a href='https://github.com/MalikAdventure/' target='_blank'>
              GitHub
            </a>
          </div>
          <div className='font-bold text-2xl mb-2 text-blue-500'>
            <a href='https://t.me/MalikAnton/' target='_blank'>
              Telegram
            </a>
          </div>
          <div className='font-bold text-2xl text-blue-500'>
            <a href='mailto:malikantonit@gmail.com' target='_blank'>
              Электронная почта
            </a>
          </div>
        </div>
        <div>
          <h3 className='font-bold text-3xl mb-5'>Поддержите нас донатом</h3>
          <div>
            <Support />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
