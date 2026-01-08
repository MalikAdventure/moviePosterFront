import type { FC } from 'react';

import { Outlet } from 'react-router-dom';

import Header from '../container/header/header';
import Breadcrumbs from '../container/breadCrumbs/breadCrumbs';
import Footer from '../container/footer/footer';
import UpButton from '../container/upButton/upButton';

const Layout: FC = () => {
  return (
    <div id='layout'>
      <Header />
      <Breadcrumbs />
      <main className='container mx-auto'>
        <Outlet />
      </main>
      <UpButton />
      <Footer />
    </div>
  );
};

export default Layout;
