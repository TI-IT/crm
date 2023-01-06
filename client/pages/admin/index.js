import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './Admin.module.scss';
import { Menu } from '../../conponents/Menu';

export default function Admin({ server_host }) {
  const [users, setUsers] = React.useState([]);

  React.useEffect(loadUsers, []);

  function loadUsers() {
    fetch(server_host + '/users/get/all', {
      method: 'get',
      credentials: 'include',
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.ok) {
          setUsers(data.users);
          console.log(data.users);
        }
      });
  }
  return (
    <>
      <Head>
        <title>Admin</title>
      </Head>
      <Menu />
      <div>
        <h2>Пользователи</h2>
      </div>
      <div>{JSON.stringify(users)}</div>
    </>
  );
}
