import type { FC } from 'react';

interface IPickButton {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const PickButton: FC<IPickButton> = ({ children, ...props }) => {
  return (
    <>
      <div>
        <button
          {...props}
          className={`${props.className} bg-neutral-800 hover:bg-neutral-900 active:bg-neutral-800 text-white text-2xl px-10 rounded-t-xl cursor-pointer`}
        >
          {children}
        </button>
        <hr className='bg-red-900 rounded-b-xl h-2' />
      </div>
    </>
  );
};

export default PickButton;
