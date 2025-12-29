import type { FC } from 'react';

import Carousel from '@/components/container/carousel/carousel';
import MovieListCarousel from '@/components/container/movieListCarousel/movieListCarousel';

const MainPage: FC = () => {
  return (
    <>
      <Carousel />
      <MovieListCarousel />
    </>
  );
};

export default MainPage;
