import { format } from 'date-fns';
import { FilterColumn } from '../filter/filterColumn';

export const COLUMNS_FILTER = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
    Filter: FilterColumn,
  },
  {
    Header: 'Name',
    Footer: 'Name',
    accessor: 'name',
    Filter: FilterColumn,
  },
  {
    Header: 'FirstName',
    Footer: 'FirstName',
    accessor: 'firstName',
    Filter: FilterColumn,
  },
  {
    Header: 'LastName',
    Footer: 'LastName',
    accessor: 'lastName',
    Filter: FilterColumn,
  },
  {
    Header: 'Email',
    Footer: 'Email',
    accessor: 'email',
    Filter: FilterColumn,
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phone',
    Cell: ({ value }) => {
      return value + ' text';
    },
    Filter: FilterColumn,
  },
  {
    Header: 'Date',
    Footer: 'Date',
    accessor: 'date_of_birth',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd.MM.yyyy' + 'г.');
    },
    Filter: FilterColumn,
  },
];

export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Name',
    Footer: 'Name',
    accessor: 'name',
  },
  {
    Header: 'FirstName',
    Footer: 'FirstName',
    accessor: 'firstName',
  },
  {
    Header: 'LastName',
    Footer: 'LastName',
    accessor: 'lastName',
  },
  {
    Header: 'Email',
    Footer: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phone',
    Cell: ({ value }) => {
      return value + ' text';
    },
  },
  {
    Header: 'Date',
    Footer: 'Date',
    accessor: 'date_of_birth',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd.MM.yyyy' + 'г.');
    },
  },
];

export const GROUPPED__COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Name',
    columns: [
      {
        Header: 'FirstName',
        accessor: 'firstName',
      },
      {
        Header: 'LastName',
        accessor: 'lastName',
      },
    ],
  },
  {
    Header: 'Info',
    columns: [
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      },
      {
        Header: 'Date',
        accessor: 'date_of_birth',
      },
    ],
  },
];
