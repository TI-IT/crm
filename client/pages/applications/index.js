import React from 'react';
import Head from 'next/head';
import styles from './Applications.module.scss';
import { Menu } from '../../conponents/Menu';
import ApplicationsPage from '../../crm/applications/page';

export default function Applications({ server_host }) {
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
        <title>Заявки applications</title>
      </Head>
      <Menu />
      <h2>Заявки</h2>
      <ApplicationsPage server_host={server_host} />
    </>
  );
}
