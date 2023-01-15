import React from 'react';
import TableaddClients from '../form';

export default function ClientsPage({ server_host }) {
  return (
    <>
      <h2>Страница Клиента</h2>
      <TableaddClients server_host={server_host} />
    </>
  );
}
