import type { FC } from 'react';

interface IFullButton {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const FullButton: FC<IFullButton> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`${props.className} text-xl bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-300 text-neutral-800 px-2 rounded-xl w-full h-8 cursor-pointer flex items-center justify-center gap-4`}
    >
      {children}
    </button>
  );
};

export default FullButton;
