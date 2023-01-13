import React from 'react';
import styles from './BasicTable.module.scss';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import STUDENTS from './student.json';
import { COLUMNS } from './../columns';
import { FilterGlobal } from './../filterGlobal';

export const SortingFormatFilterTable = () => {
  const columns = React.useMemo(() => COLUMNS, []);
  const data = React.useMemo(() => STUDENTS, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
  );

  const { globalFilter } = state;

  return (
    <>
      <FilterGlobal filter={globalFilter} setFilter={setGlobalFilter} />
      <div>
        <h1>SortingFormatFilterTable</h1>
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
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps}>{column.render('Footer')}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
};
