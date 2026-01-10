import type { FC } from 'react';

interface IAttractiveButton {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const AttractiveButton: FC<IAttractiveButton> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`${props.className} bg-blue-500 hover:bg-blue-600 active:bg-blue-500 text-neutral-800 text-2xl px-10 rounded-xl cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default AttractiveButton;
