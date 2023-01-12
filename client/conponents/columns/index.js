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
  },
  {
    Header: 'Date',
    Footer: 'Date',
    accessor: 'date_of_birth',
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
