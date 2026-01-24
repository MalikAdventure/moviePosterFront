import type { FC } from 'react';

import { Routes, Route } from 'react-router-dom';

import Layout from '../templates/layout';

import MainPage from '@/pages/mainPage';
import NotFoundPage from '@/pages/notFoundPage';
import MovieListPage from '@/pages/movieListPage';
import MovieDetailedPage from '@/pages/movieDetailedPage';
import LoginPage from '@/pages/loginPage';
import RegisterPage from '@/pages/registerPage';
import ProfilePage from '@/pages/profilePage';
import DirectorListPage from '@/pages/directorListPage';
import DirectorDetailedPage from '@/pages/directorDetailedPage';
import CategoryCardsPage from '@/pages/categoryCardsPage';
import TagListPage from '@/pages/tagListPage';

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />}></Route>
          <Route path='movie_list' element={<MovieListPage />}></Route>
          <Route
            path='movie_list/:slug'
            element={<MovieDetailedPage />}
          ></Route>
          <Route path='director_list' element={<DirectorListPage />}></Route>
          <Route
            path='director_list/:slug'
            element={<DirectorDetailedPage />}
          ></Route>
          <Route path='category' element={<CategoryCardsPage />}></Route>
          <Route path='tag' element={<TagListPage />}></Route>
          <Route path='login' element={<LoginPage />}></Route>
          <Route path='register' element={<RegisterPage />}></Route>
          <Route path='profile' element={<ProfilePage />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
