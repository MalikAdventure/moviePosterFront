import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadCrumbs: FC = () => {
  const location = useLocation();
  let currentLink = '';
  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <>
          <p className='mr-2 text-white text-1xl'>&gt;</p>
          <li className='mr-2' key={crumb}>
            <Link to={currentLink} className='text-white text-1xl'>
              {crumb}
            </Link>
          </li>
        </>
      );
    });

  return (
    <>
      <div className='bg-blue-500 mb-15'>
        <nav>
          <ul className='flex container mx-auto'>
            <li>
              <Link to='/' className='mr-2 text-white text-1xl'>
                Главная страница
              </Link>
            </li>
            {crumbs}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default BreadCrumbs;
