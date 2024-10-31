// src/components/Button.tsx
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { IButtonProps } from './types';
import styles from './styles.module.scss';

export const Button: FC<IButtonProps> = props => {
  const {
    children,
    onClick,
    to,
    variant = 'primary',
    className,
    disabled = false,
    ...restProps
  } = props;

  const buttonClass = `${styles.button} ${styles[variant]} ${className || ''}`;

  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
      {...restProps}
    >
      {children}
    </button>
  );
};
