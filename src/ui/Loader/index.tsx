import React, { FC } from 'react';

import { ILoaderProps } from './types';
import styles from './styles.module.scss';

export const Loader: FC<ILoaderProps> = props => {
  const { message = 'Loading...', inline = false, size = 'medium' } = props;

  const loaderClass = `${styles.loader} ${styles[size]} ${
    inline ? styles.inline : styles.center
  }`;

  return (
    <div className={loaderClass}>
      <div className={styles.spinner} />
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};
