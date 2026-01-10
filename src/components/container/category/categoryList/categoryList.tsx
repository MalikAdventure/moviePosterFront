import type { FC } from 'react';

import CategoryItem from '../categoryItem/categoryItem';

const CategoryList: FC = () => {
  return (
    <>
      <section className='mb-15'>
        <h2 className='font-bold text-3xl text-white mb-5'>Категории</h2>
        <ul className='flex flex-wrap gap-10'>
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </ul>
      </section>
    </>
  );
};

export default CategoryList;
