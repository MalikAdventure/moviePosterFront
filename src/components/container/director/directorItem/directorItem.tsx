import type { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import Avatar from '@/components/fragments/avatar/avatar';

const DirectorItem: FC = () => {
  const navigate = useNavigate();

  const toDirectorDetailedPage = () => {
    navigate(`/director_list/slug`);
  };

  return (
    <>
      <li onClick={toDirectorDetailedPage} className='cursor-pointer'>
        <Avatar />
      </li>
    </>
  );
};

export default DirectorItem;
