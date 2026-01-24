import type { FC } from 'react';
import { useEffect } from 'react';

import { useAppDispatch } from '@/hooks/redux';
import { setContextPage } from '@/store/reducers/contextSlice';

import CardDetailed from '@/components/container/card/cardDetailed/cardDetailed';

const DirectorDetailedPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setContextPage('directorDetailedPage'));
  });

  return (
    <>
      <CardDetailed />
    </>
  );
};

export default DirectorDetailedPage;
