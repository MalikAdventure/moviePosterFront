import type { FC } from 'react';

import Navigation from '@/components/fragments/navigation/navigation';

const Header: FC = () => {
  return (
    <header className='bg-orange-600 py-2'>
      <Navigation />
    </header>
  );
};

export default Header;
