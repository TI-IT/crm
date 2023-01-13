import React from 'react';

export default function ProductsData(server_host) {
  const [products, setProducts] = React.useState([]);

  // React.useEffect(loadProducts, []);

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
  return products;
}
