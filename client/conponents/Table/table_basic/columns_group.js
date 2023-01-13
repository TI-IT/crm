import React from 'react';
import styles from './BasicTable.module.scss';
import { useTable } from 'react-table';
import STUDENTS from './student.json';
import { COLUMNS, GROUPPED__COLUMNS } from './../columns';

export const BasicTable = () => {
  const columns = React.useMemo(() => GROUPPED__COLUMNS, []);
  const data = React.useMemo(() => STUDENTS, []);

  const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <>
      <div>
        <h1>BasicTable</h1>
        <a href="https://www.youtube.com/watch?v=n4vgItNB_ac&list=PLC3y8-rFHvwgWTSrDiwmUsl4ZvipOw9Cz&index=5">
          Lesson
        </a>
      </div>
      <table {...getTableProps()} className={styles.table}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
