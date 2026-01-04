import type { FC } from 'react';

import facebookImg from '@/assets/imgs/facebook.png';
import twitterImg from '@/assets/imgs/twitter.png';
import instagramImg from '@/assets/imgs/instagram.png';
import tiktokImg from '@/assets/imgs/tiktok.png';
import youtubeImg from '@/assets/imgs/youtube.png';
import redditImg from '@/assets/imgs/reddit.png';

const Support: FC = () => {
  return (
    <>
      <div className='flex justify-between items-center gap-4'>
        <a
          href='https://www.facebook.com/'
          target='_blank'
          className='w-10 bg-white'
        >
          <img src={facebookImg} alt='facebook' />
        </a>
        <a href='https://x.com/' target='_blank' className='w-10 bg-white'>
          <img src={twitterImg} alt='twitter' />
        </a>
        <a
          href='https://www.instagram.com/'
          target='_blank'
          className='w-10 bg-white'
        >
          <img src={instagramImg} alt='instagram' />
        </a>
        <a
          href='https://www.tiktok.com/'
          target='_blank'
          className='w-10 bg-white'
        >
          <img src={tiktokImg} alt='tiktok' />
        </a>
        <a
          href='https://www.youtube.com/'
          target='_blank'
          className='w-10 bg-white'
        >
          <img src={youtubeImg} alt='youtube' />
        </a>
        <a
          href='https://www.reddit.com/'
          target='_blank'
          className='w-10 bg-white'
        >
          <img src={redditImg} alt='reddit' />
        </a>
      </div>
    </>
  );
};

export default Support;
