import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './Dashboard.module.scss';
import { Menu } from '../../conponents/Menu';

export default function Dashboard({ server_host }) {
  return (
    <>
      <Head>
        <title>Личный кабинет</title>
      </Head>
      <Menu />
      <div>
        <h2>Личный кабинет</h2>
      </div>
    </>
  );
}
