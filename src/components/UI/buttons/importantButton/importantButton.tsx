import type { FC } from 'react';

interface IImportantButton {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const ImportantButton: FC<IImportantButton> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`${props.className} bg-red-600 hover:bg-red-700 active:bg-red-600 text-white text-2xl px-10 rounded-xl cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default ImportantButton;
