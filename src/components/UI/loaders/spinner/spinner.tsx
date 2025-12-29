import classes from './spinner.module.scss';

import type { FC } from 'react';

interface ISpinner {
  className?: string;
}

const Spinner: FC<ISpinner> = ({ ...props }) => {
  return (
    <div style={{ padding: '30px 0', textAlign: 'center' }}>
      <div className={`${classes.spinner} ${props.className}`}></div>
    </div>
  );
};

export default Spinner;
