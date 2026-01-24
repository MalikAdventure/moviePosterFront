import type { FC } from 'react';
import { useEffect } from 'react';

import { useAppDispatch } from '@/hooks/redux';
import { setContextPage } from '@/store/reducers/contextSlice';

import CardList from '@/components/container/card/cardList/cardList';

const DirectorListPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setContextPage('directorListPage'));
  });

  return (
    <>
      <CardList />
    </>
  );
};

export default DirectorListPage;
