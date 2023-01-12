import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './Products.module.scss';
import { Menu } from '../../conponents/Menu';
import { BasicTable } from './../../conponents/basic-table';

export default function Products({ server_host }) {
  return (
    <>
      <Head>
        <title>Товары</title>
      </Head>
      <Menu />
      <BasicTable />
    </>
  );
}
