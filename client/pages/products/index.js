import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './Products.module.scss';
import { Menu } from '../../conponents/Menu';
import ProductsPage from '../../crm/products/page';

export default function Products({ server_host }) {
  return (
    <>
      <Head>
        <title>Товары ProductsPage</title>
      </Head>
      <Menu />
      <ProductsPage server_host={server_host} />
    </>
  );
}
