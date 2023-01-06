import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './Signup.module.scss';
import { Menu } from '../../conponents/Menu';
import emailValidator from 'email-validator';

export default function Signup() {
  const [user, setUser] = React.useState({ email: '', password: '' });
  const [secondPassword, setSecondPassword] = React.useState('');
  const [message, setMessage] = React.useState('');

  function changeUser(name, value) {
    setUser({
      ...user,
      [name]: value,
    });
    console.log(user.email);
    console.log(user.password);
  }

  async function signUp() {
    setMessage('');
    if (!user.email || !user.password || !secondPassword) {
      setMessage('Заполните все поля');
      return;
    }
    if (secondPassword !== user.password) {
      setMessage('Пароли не совпадают');
      return;
    }
    if (!emailValidator.validate(user.email)) {
      setMessage('Email не корректный');
      return;
    }

    const res = await fetch('http://localhost:9001/users/signup', {
      method: 'post',
      credentials: 'include',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    console.log(data);
  }
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Menu />
      <div className={styles.container}>
        <div>
          <h2>Регистрация</h2>
        </div>
        <div>{message}</div>
        <form>
          <div>
            <label>email </label>
            <div>
              <input
                type={'text'}
                name={'email'}
                onChange={(e) => changeUser('email', e.target.value)}
                value={user.email}
              />
            </div>
          </div>
          <div>
            <label>Пароль </label>
            <div>
              <input
                type={'password'}
                onChange={(e) => changeUser('password', e.target.value)}
                value={user.password}
              />
            </div>
          </div>
          <div>
            <label>Повторение пароля </label>
            <div>
              <input type={'password'} onChange={(e) => setSecondPassword(e.target.value)} />
            </div>
          </div>
          <div>
            <button type={'button'} onClick={signUp}>
              Зарегистрироватся
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
