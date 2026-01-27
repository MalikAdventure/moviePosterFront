import type { FC } from 'react';
import { useEffect } from 'react';

import { useAppDispatch } from '@/hooks/redux';
import { setContextPage } from '@/store/reducers/contextSlice';

import CardDetailed from '@/components/container/card/cardDetailed/cardDetailed';

const CategoryDetailedPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setContextPage('categoryDetailedPage'));
  });

  return (
    <>
      <CardDetailed />
    </>
  );
};

export default CategoryDetailedPage;
