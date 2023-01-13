import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './Products.module.scss';
import { Menu } from '../../conponents/Menu';
import { BasicTable } from './../../conponents/Table/table_basic';
import { SortingTable } from './../../conponents/Table/table_sorting';
import { SortingFormatTable } from './../../conponents/Table/table_sorting_format';
import { SortingFormatFilterTable } from './../../conponents/Table/table_sorting_format_filter/filterGlobal';
import { SortingFormatFilterColumnTable } from './../../conponents/Table/table_sorting_format_filter/filterColumn';

export default function Products({ server_host }) {
  return (
    <>
      <Head>
        <title>Товары</title>
      </Head>
      <Menu />
      <h1>Products</h1>
    </>
  );
}
