import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import styles from './Supply.module.scss';
import { Menu } from '../../conponents/Menu';
import SupplyPage from '../../crm/supply/page';
import logoImage from '../../public/logo/logo.png';

export default function Supply({ server_host }) {
  const [products, setProducts] = React.useState([]);

  React.useEffect(test, []);

  function test() {
    // fetch(server_host + '/tasks/getalltasks', {
    //   method: 'get',
    //   credentials: 'include',
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     if (data) {
    //       setTasks(data.tasks);
    //     }
    //   });
  }

  return (
    <>
      <Head>
        <title>Снабжение Supply</title>
      </Head>
      <div className={styles.gridContainer}>
        <div className={styles.gridHeader}>
          <h2>Header</h2>
        </div>
        <div className={styles.gridSidebar}>
          <Menu />
        </div>
        <div className={styles.gridContent}>
          <SupplyPage />
        </div>
      </div>
    </>
  );
}
