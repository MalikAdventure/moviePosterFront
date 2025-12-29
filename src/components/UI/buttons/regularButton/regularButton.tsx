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
      className='text-4xl cursor-pointer rounded-full border-none transition-opacity focus:outline-none bg-blue-700 hover:bg-blue-600 active:bg-blue-700 py-1 w-40'
    >
      {children}
    </button>
  );
};

export default RegularButton;
