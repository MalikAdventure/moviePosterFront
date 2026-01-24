import type { FC } from 'react';
import { useEffect } from 'react';

import { useAppDispatch } from '@/hooks/redux';
import { setContextPage } from '@/store/reducers/contextSlice';

import CardList from '@/components/container/card/cardList/cardList';

const MovieCollectionPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setContextPage('movieListPage'));
  });

  return (
    <>
      <CardList />
    </>
  );
};

export default MovieCollectionPage;
