import { HTMLAttributes } from 'react';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}
