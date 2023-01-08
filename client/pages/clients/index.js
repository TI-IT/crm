import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './clients.module.scss';
import { Menu } from '../../conponents/Menu';
import { useRouter } from 'next/router';

export default function Clients({ server_host }) {
  const [clients, setClients] = React.useState([]);
  const [secondPassword, setSecondPassword] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [disabled, setDisabled] = React.useState(false);
  const router = useRouter('/');

  async function getClients() {
    setDisabled(true);
    setMessage('');
    fetch(server_host + '/clients/allclients', {
      method: 'get',
      credentials: 'include',
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.ok) {
          setClients(data.clients);
          console.log(data.clients);
        }
      });

    console.log(clients);
  }

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>Клиенты</title>
      </Head>
      <Menu />
      <div className={styles.container}>
        <h2>Клиенты</h2>
        <h2>Нужно настроить fetch</h2>
      </div>
      <button type={'button'} onClick={getClients}>
        Запрос
      </button>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Емаил</th>
            <th>Пароль</th>
            <th>Роль</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, id) => (
            <tr key={id}>
              <td>{client.email}</td>
              <td>{client.password}</td>
              <td>{client.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
