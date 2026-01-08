import type { FC } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';

import { setShowButton } from '@/store/reducers/upSlice';

import { useEffect } from 'react';

const UpButton: FC = () => {
  const dispatch = useAppDispatch();
  const { showButton } = useAppSelector((state) => state.upReducer);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        dispatch(setShowButton(true));
      } else {
        dispatch(setShowButton(false));
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className='fixed right-15 bottom-15 bg-orange-600 text-white text-xl w-10 h-10 rounded-xl cursor-pointer'
        >
          &#8657;
        </button>
      )}
    </>
  );
};

export default UpButton;
