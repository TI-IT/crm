import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './Task.module.scss';
import { Menu } from '../../conponents/Menu';

export default function Dashboard({ server_host }) {
  const [loading, setLoading] = React.useState(true);
  const [needAuth, setNeedAuth] = React.useState(false);
  const [tasks, setTasks] = React.useState([]);
  const [user, setUser] = React.useState({ username: '', password: '' });
  const [message, setMessage] = React.useState('');
  const [disabled, setDisabled] = React.useState(false);

  React.useEffect(loadTasks, []);

  function loadTasks() {
    fetch(server_host + '/tasks/getalltasks', {
      method: 'get',
      credentials: 'include',
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.ok) {
          setTasks(data);
        }
      });
  }

  console.log(tasks);

  React.useEffect(() => {
    (async () => {
      await checkAuth();
    })();
  }, []);

  async function checkAuth() {
    const res = await fetch(server_host + '/tasks/getalltasks', {
      method: 'get',
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
    const res = await fetch(server_host + '/users/me/', {
      method: 'get',
      credentials: 'include',
    });
    const data = await res.json();
    if (data.ok) {
      setUser(data.user);
    }
  }

  if (loading) {
    return (
      <div className={styles.container}>
        <h1>Загрузка</h1>
      </div>
    );
  }

  if (needAuth) {
    return (
      <div className={styles.container}>
        <h1>Необходимо войти</h1>
        <div>
          <Link href={'/login'}>Перйти на форму входа</Link>
        </div>
      </div>
    );
  }

  function changeUser(name, value) {
    setUser({
      ...user,
      [name]: value,
    });
  }

  async function save() {
    setDisabled(true);
    setMessage('');
    const res = await fetch(server_host + '/users/update', {
      method: 'post',
      credentials: 'include',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    setDisabled(false);
    if (data.ok) {
      setMessage('Сохранено');
    } else {
      setMessage('Ошибка');
    }
  }

  async function savePassword() {
    setDisabled(true);
    setMessage('');
    const res = await fetch(server_host + '/users/updatePassword', {
      method: 'post',
      credentials: 'include',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    setDisabled(false);
    if (data.ok) {
      setMessage('Сохранено');
    } else {
      setMessage('Ошибка');
    }
  }

  return (
    <>
      <Head>
        <title>Карточки</title>
      </Head>
      <Menu />
      <div className={styles.container}>
        <h1>Редактируем страницу карточки</h1>
        <h2>Карточки</h2>
      </div>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Емаил</th>
              <th>Пароль</th>
              <th>Роль</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, id) => (
              <tr key={id}>
                <td>{tasks[task].id}</td>
                <td>{tasks[task].title}</td>
                <td>{tasks[task].createdBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>************************************</div>
        <div>{message}</div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Емаил</th>
              <th>Пароль</th>
              <th>Роль</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.role}</td>
            </tr>
            <tr>
              <td>
                <input
                  type={'text'}
                  value={user.username}
                  onChange={(e) => changeUser('username', e.target.value)}
                />
              </td>
              <td></td>
              <td>
                <input
                  type={'text'}
                  value={user.password}
                  onChange={(e) => changeUser('password', e.target.value)}
                />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <button
                  type={'button'}
                  onClick={save}
                  className={styles.button}
                  disabled={disabled}
                >
                  Сохранить
                </button>
              </td>
              <td></td>
              <td>
                <button
                  type={'button'}
                  onClick={savePassword}
                  className={styles.button}
                  disabled={disabled}
                >
                  Сохранить пароль
                </button>
              </td>
              <td></td>
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
