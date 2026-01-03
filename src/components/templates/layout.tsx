import type { FC } from 'react';

import { Outlet } from 'react-router-dom';

import Header from '../container/header/header';
import Breadcrumbs from '../container/breadCrumbs/breadCrumbs';
// import Footer from '../organisms/footer/footer';
// import UpButton from '../molecules/upButton/upButton';

const Layout: FC = () => {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <main className='container mx-auto'>
        <Outlet />
      </main>
      {/* <UpButton />
      <Footer /> */}
    </div>
  );
};

export default Layout;
