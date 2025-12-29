import type { FC } from 'react';

import { Routes, Route } from 'react-router-dom';

import Layout from '../templates/layout';

import MainPage from '@/pages/mainPage';
import NotFoundPage from '@/pages/notFoundPage';

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />}></Route>
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
