import type { FC } from 'react';

interface IRegularButton {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const RegularButton: FC<IRegularButton> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className='text-2xl cursor-pointer rounded-xl bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-300 px-3'
    >
      {children}
    </button>
  );
};

export default RegularButton;
