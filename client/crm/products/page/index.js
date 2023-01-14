import React from 'react';
import Link from 'next/link';
import styles from './ProductsPage.module.scss';
import { TableAddProducts } from '../table/addProducts';
import { TableGetProducts } from '../table/getProducts';

export default function ProductsPage({ server_host }) {
  const [products, setProducts] = React.useState([]);
  React.useEffect(loadProducts, []);

  function loadProducts() {
    fetch(server_host + '/products/get/all', {
      method: 'get',
      credentials: 'include',
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.ok) {
          setProducts(data.products);
        }
      });
  }
  return (
    <>
      <h1>ProductsPage</h1>
      <div className={styles.container}></div>
      <TableAddProducts server_host={server_host} loadProducts={loadProducts} />
      <TableGetProducts server_host={server_host} products={products} />
    </>
  );
}
