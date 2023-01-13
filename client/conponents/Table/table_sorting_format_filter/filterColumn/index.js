import React from 'react';
import styles from './BasicTable.module.scss';
import { useTable, useGlobalFilter, useFilters } from 'react-table';
import STUDENTS from './student.json';
import { COLUMNS_FILTER } from '../../columns';
import { FilterGlobal } from '../../filter/filterGlobal';

export const SortingFormatFilterColumnTable = () => {
  const columns = React.useMemo(() => COLUMNS_FILTER, []);
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
    useFilters,
    useGlobalFilter,
  );

  const { globalFilter } = state;

  return (
    <>
      <FilterGlobal filter={globalFilter} setFilter={setGlobalFilter} />
      <div>
        <h1>SortingFormatFilterColumnTable</h1>
      </div>
      <table {...getTableProps()} className={styles.table}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
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
