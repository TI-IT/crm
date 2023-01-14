import React from 'react';
import { useRouter } from 'next/router';
import styles from './TableaddClients.module.scss';

export default function TableaddClients({ server_host }) {
  const [titles, setTitles] = React.useState({
    surname: 'Фамилия',
    name: 'Имя',
    patronymic: 'Отчество',
    phone: 'Телефон',
    organization: 'Организация',
    city: 'Город',
    address: 'Адрес',
    notes: 'Примечания',
  });
  const [clients, setClients] = React.useState({
    surname: 'Фамилия',
    name: 'Имя',
    patronymic: 'Отчество',
    phone: 'Телефон',
    organization: 'Организация',
    city: 'Город',
    address: 'Адрес',
    notes: 'Примечания',
  });
  const [message, setMessage] = React.useState('');
  const [disabled, setDisabled] = React.useState(false);
  const router = useRouter('/');

  function changeClients(name, value) {
    setClients({
      ...clients,
      [name]: value,
    });
  }

  function addSupplyTable(name, value) {
    setProduct({
      ...product,
      [name]: value,
    });
  }

  async function addProduct() {
    setDisabled(true);
    setMessage('');
    if (
      !product.contractor ||
      !product.type ||
      !product.category ||
      !product.subCategory ||
      !product.name ||
      !product.article ||
      !product.finishing ||
      !product.unit ||
      !product.costPrice ||
      !product.urlImage
    ) {
      setMessage('Заполните все поля');
      setDisabled(false);
      return;
    }

    const res = await fetch(server_host + '/products/add', {
      method: 'post',
      credentials: 'include',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    if (data.ok) {
      setMessage('Продукт добавлен');
      loadProducts();
      // router.push('/dashboard');
    } else {
      setDisabled(false);
      setMessage('Ошибка попробуйте другие данные');
    }
  }

  function addSupplyTable(name, value) {
    setProduct({
      ...product,
      [name]: value,
    });
  }

  async function addProduct() {
    setDisabled(true);
    setMessage('');
    if (
      !product.contractor ||
      !product.type ||
      !product.category ||
      !product.subCategory ||
      !product.name ||
      !product.article ||
      !product.finishing ||
      !product.unit ||
      !product.costPrice ||
      !product.urlImage
    ) {
      setMessage('Заполните все поля');
      setDisabled(false);
      return;
    }

    const res = await fetch(server_host + '/products/add', {
      method: 'post',
      credentials: 'include',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    if (data.ok) {
      setMessage('Продукт добавлен');
      loadProducts();
      // router.push('/dashboard');
    } else {
      setDisabled(false);
      setMessage('Ошибка попробуйте другие данные');
    }
  }

  return (
    <>
      <div>
        <h2>Добавить Клиента</h2>
      </div>
      <div>{message}</div>
      <div className={styles.containerTable}>
        <div className={styles.tableResponsive}>
          <table className={styles.table}>
            <thead>
              <tr>
                {Object.values(titles).map((i, id) => (
                  <th key={id}>{i}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type={'text'}
                    name={'surname'}
                    placeholder={'Фамилия'}
                    onChange={(e) => changeClients('surname', e.target.value)}
                    value={clients.surname}
                  ></input>
                </td>
                <td>
                  <input
                    type={'text'}
                    name={'name'}
                    placeholder={'Имя'}
                    onChange={(e) => changeClients('name', e.target.value)}
                    value={clients.name}
                  ></input>
                </td>
                <td>
                  <input
                    type={'text'}
                    name={'patronymic'}
                    placeholder={'Отчество'}
                    onChange={(e) => changeClients('patronymic', e.target.value)}
                    value={clients.patronymic}
                  ></input>
                </td>
                <td>
                  <input
                    type={'number'}
                    name={'phone'}
                    placeholder={'Телефон'}
                    onChange={(e) => changeClients('phone', e.target.value)}
                    value={clients.phone}
                  ></input>
                </td>
                <td>
                  <input
                    type={'text'}
                    name={'organization'}
                    placeholder={'Организация'}
                    onChange={(e) => changeClients('organization', e.target.value)}
                    value={clients.organization}
                  ></input>
                </td>
                <td>
                  <input
                    type={'text'}
                    name={'city'}
                    placeholder={'Город'}
                    onChange={(e) => changeClients('city', e.target.value)}
                    value={clients.city}
                  ></input>
                </td>
                <td>
                  <input
                    type={'text'}
                    name={'address'}
                    placeholder={'Адрес'}
                    onChange={(e) => changeClients('address', e.target.value)}
                    value={clients.address}
                  ></input>
                </td>
                <td>
                  <input
                    type={'text'}
                    name={'notes'}
                    placeholder={'Примечания'}
                    onChange={(e) => changeClients('notes', e.target.value)}
                    value={clients.notes}
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
