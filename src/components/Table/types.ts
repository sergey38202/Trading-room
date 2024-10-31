import { HTMLAttributes, ReactNode } from 'react';

export interface ITableProps<T> extends HTMLAttributes<HTMLTableElement> {
  headers: string[];
  data: T[];
  rowKey: keyof T;
  renderCell: (item: T, columnIndex: number) => ReactNode;
}
