import type { FC } from 'react';

import { Routes, Route } from 'react-router-dom';

import Layout from '../templates/layout';

import MainPage from '@/pages/mainPage';
import NotFoundPage from '@/pages/notFoundPage';
import MovieCollectionPage from '@/pages/movieCollectionPage';
import MovieDetailedPage from '@/pages/movieDetailedPage';
import LoginPage from '@/pages/loginPage';
import RegisterPage from '@/pages/registerPage';

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />}></Route>
          <Route
            path='movie_collection'
            element={<MovieCollectionPage />}
          ></Route>
          <Route
            path='movie_collection/:slug'
            element={<MovieDetailedPage />}
          ></Route>
          <Route path='login' element={<LoginPage />}></Route>
          <Route path='register' element={<RegisterPage />}></Route>
          {/* <Route path='catalog' element={<CatalogPage />}></Route>
          <Route path='catalog/:id' element={<DetailedPage />}></Route>
          <Route path='authorization' element={<AuthorizationPage />}></Route>
          <Route path='registration' element={<RegistrationPage />}></Route> */}
          <Route path='*' element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
