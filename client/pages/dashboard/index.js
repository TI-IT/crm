import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './Dashboard.module.scss';
import { Menu } from '../../conponents/Menu';
import { useRouter } from 'next/router';

export default function Dashboard({ server_host }) {
  const [loading, setLoading] = React.useState(true);
  const [needAuth, setNeedAuth] = React.useState(false);
  const [user, setUser] = React.useState({});
  const router = useRouter();

  React.useEffect(() => {
    (async () => {
      await checkAuth();
    })();
  }, []);

  async function checkAuth() {
    const res = await fetch(server_host + '/users/check/auth', {
      method: 'post',
      credentials: 'include',
    });
    const data = await res.json();
    if (data.ok) {
      setLoading(false);
      await loadData();
    } else {
      setNeedAuth(true);
      setLoading(false);
    }
  }

  async function loadData() {
    const res = await fetch(server_host + '/users/me', {
      method: 'get',
      credentials: 'include',
    });
    const data = await res.json();
    if (data.ok) {
      setLoading(false);
      setUser(data.user);
    }
  }
  if (loading) {
    return (
      <div className={styles.container}>
        <h1>Загрузка...</h1>
      </div>
    );
  }

  if (needAuth) {
    router.push('/login');
    return;
  }

  return (
    <>
      <Head>
        <title>Личный кабинет</title>
      </Head>
      <Menu />
      <div>
        <h2>Личный кабинет</h2>
      </div>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <td>Емаил</td>
            <td>Пароль</td>
            <td>Роль</td>
          </thead>
          <tbody>
            <tr>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.role}</td>
            </tr>
          </tbody>
        </table>
        <button className={styles.button}>
          <a href={server_host + '/users/logout'}>Выход</a>
        </button>
      </div>
    </>
  );
}
