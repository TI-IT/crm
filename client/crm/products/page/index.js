import React from 'react';
import Link from 'next/link';
import styles from './ProductsPage.module.scss';
import { TableProducts } from '../table';
import { useRouter } from 'next/router';

export default function ProductsPage({ server_host }) {
  const [user, setUser] = React.useState({ email: '', password: '' });
  const [product, setProduct] = React.useState({ category: '', name: '' });
  const [secondPassword, setSecondPassword] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [disabled, setDisabled] = React.useState(false);
  const router = useRouter('/');

  function changeProduct(name, value) {
    setProduct({
      ...product,
      [name]: value,
    });
  }

  async function signUp() {
    setDisabled(true);
    setMessage('');
    if (!product.category || !product.name || !secondPassword) {
      setMessage('Заполните все поля');
      setDisabled(false);
      return;
    }
    if (secondPassword !== user.password) {
      setMessage('Пароли не совпадают');
      setDisabled(false);
      return;
    }
    if (!emailValidator.validate(user.email)) {
      setMessage('Email не корректный');
      setDisabled(false);
      return;
    }

    const res = await fetch(server_host + '/users/signup', {
      method: 'post',
      credentials: 'include',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    if (data.ok) {
      setMessage('Регистрация прошла успешно. перенаправление в личный кабинет');
      router.push('/dashboard');
    } else {
      setDisabled(false);
      setMessage('Ошибка попробуйте другие данные');
    }
  }

  return (
    <>
      <h1>ProductsPage</h1>
      <div className={styles.container}>
        <div>
          <h2>Добавить товар</h2>
        </div>
        <div>{message}</div>
        <form>
          <span>
            <input
              type={'text'}
              name={'category'}
              onChange={(e) => changeProduct('category', e.target.value)}
              value={product.category}
              placeholder={'category'}
            />
          </span>
          <span>
            <input
              type={'text'}
              name={'name'}
              onChange={(e) => changeProduct('name', e.target.value)}
              value={product.name}
              placeholder={'Наименование'}
            />
          </span>
          <span>
            <input
              type={'text'}
              name={'color'}
              onChange={(e) => changeProduct('color', e.target.value)}
              value={product.color}
              placeholder={'Цвет'}
            />
          </span>

          <div>
            <button type={'button'} onClick={signUp} className={styles.button} disabled={disabled}>
              Добавить
            </button>
          </div>
        </form>
      </div>
      <TableProducts server_host={server_host} />
    </>
  );
}
