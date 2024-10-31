import React from 'react';

import { ITableProps } from './types';
import styles from './styles.module.scss';

/**
 * Reusable Table component.
 * Renders a table with dynamic headers and rows based on provided data.
 *
 * @template T - The type of the data item in the table.
 * @param {TableProps<T>} props - The props for the Table component.
 * @param {string[]} props.headers - The column headers.
 * @param {T[]} props.data - The data to be displayed in rows.
 * @param {keyof T} props.rowKey - The unique key for each row.
 * @param {(item: T, columnIndex: number) => React.ReactNode} props.renderCell - Function to render each cell.
 *
 * @returns {JSX.Element} The rendered Table component.
 */
export const Table = <T,>(props: ITableProps<T>) => {
  const { headers, data, rowKey, renderCell } = props;

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={String(item[rowKey])}>
            {headers.map((_, columnIndex) => (
              <td key={columnIndex}>{renderCell(item, columnIndex)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
