import React from 'react';
import Head from 'next/head';
import styles from './Clients.module.scss';
import { Menu } from '../../conponents/Menu';
import ClientsPage from '../../crm/clients/page';

export default function Clients({ server_host }) {
  return (
    <>
      <Head>
        <title>Клиенты clients</title>
      </Head>
      <div className={styles.gridContainer}>
        <div className={styles.gridHeader}>
          <Menu />
        </div>
        <div className={styles.gridSidebar}></div>
        <div className={styles.gridContent}>
          <h2>Клиенты</h2>
          <div>
            <button>Добавить клиента</button>
          </div>
          <ClientsPage server_host={server_host} />
        </div>
      </div>
    </>
  );
}
