import React from 'react';
import Head from 'next/head';
import styles from './Clients.module.scss';
import { Menu } from '../../conponents/Menu';
import ClientsPage from '../../crm/clients/page';

export default function Clients({ server_host }) {
  const [clients, setClients] = React.useState([]);

  async function getClients() {
    setDisabled(true);
    setMessage('');
    fetch(server_host + '/clients/allclients', {
      method: 'get',
      credentials: 'include',
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.ok) {
          setClients(data.clients);
          console.log(data.clients);
        }
      });

    console.log(clients);
  }

  return (
    <>
      <Head>
        <title>Клиенты clients</title>
      </Head>
      <Menu />
      <h2>Клиенты</h2>
      <ClientsPage server_host={server_host} />
    </>
  );
}
