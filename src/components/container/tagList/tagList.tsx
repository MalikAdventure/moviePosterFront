import type { FC } from 'react';

import PickButton from '@/components/UI/buttons/pickButton/pickButton';

import RegularButton from '@/components/UI/buttons/regularButton/regularButton';

const TagList: FC = () => {
  return (
    <>
      <section className='mb-15'>
        <h2 className='font-bold text-3xl text-white mb-5'>Теги</h2>
        <div className='flex flex-wrap gap-2 mb-5'>
          <PickButton>Название тега</PickButton>
          <PickButton>Название тега</PickButton>
          <PickButton>Название тега</PickButton>
          <PickButton>Название тега</PickButton>
          <PickButton>Название тега</PickButton>
          <PickButton>Название тега</PickButton>
          <PickButton>Название тега</PickButton>
          <PickButton>Название тега</PickButton>
          <PickButton>Название тега</PickButton>
          <PickButton>Название тега</PickButton>
          <PickButton>Название тега</PickButton>
          <PickButton>Название тега</PickButton>
          <PickButton>Название тега</PickButton>
          <PickButton>Название тега</PickButton>
          <PickButton>Название тега</PickButton>
        </div>
        <RegularButton>Найти фильм по тегам</RegularButton>
      </section>
    </>
  );
};

export default TagList;
