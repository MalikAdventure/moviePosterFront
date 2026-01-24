import type { FC } from 'react';

import Filter from '@/components/fragments/filter/filter';
import DirectorItem from '../directorItem/directorItem';

const DirectorList: FC = () => {
  return (
    <>
      <section className='mb-15'>
        <Filter />
        <ul className='flex flex-wrap gap-8'>
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
          <DirectorItem />
        </ul>
      </section>
    </>
  );
};

export default DirectorList;
