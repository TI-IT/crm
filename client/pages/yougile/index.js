import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './Yougile.module.scss';
import { Menu } from '../../conponents/Menu';
import { useRouter } from 'next/router';

export default function Signup({ server_host }) {
  const [user, setUser] = React.useState({ email: '', password: '' });
  const [secondPassword, setSecondPassword] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [disabled, setDisabled] = React.useState(false);
  const router = useRouter('/');

  async function resYouGile() {
    setDisabled(true);
    setMessage('');
    fetch('/users/yougile-', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer w1cdqrHMxbbPVsbwDGqDAKMkWUatHEjP7Ez0l91Vatjxe7LI9PAivfdWFhZjhUGm',
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <Head>
        <title>YouGile</title>
      </Head>
      <Menu />
      <div className={styles.container}>
        <h2>YouGole</h2>
        <h2>Нужно настроить fetch</h2>
      </div>
      <button type={'button'} onClick={resYouGile}>
        Запрос
      </button>
    </>
  );
}
