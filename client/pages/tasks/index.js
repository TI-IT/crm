import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './Task.module.scss';
import { Menu } from '../../conponents/Menu';

export default function Dashboard({ server_host }) {
  const [tasks, setTasks] = React.useState([]);

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
        if (data) {
          setTasks(data.tasks);
        }
      });
  }

  return (
    <>
      <Head>
        <title>Карточки</title>
      </Head>
      <Menu />
      <div className={styles.container}>
        <h1>Редактируем страницу карточки</h1>
        <h3>
          Урок 12. JavaScript. Методы массивов (forEach, map, filter, reduce, find, findIndex). Js
          Массивы. https://www.youtube.com/watch?v=nEabP9CYCAQ&t=726s
        </h3>
        <h2>Карточки</h2>
        <div>
          <a href="https://yougile.com/api-v2#/">YOUGILE API2</a>
        </div>
      </div>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>id</th>
              <th>Название</th>
              <th>Описание задачи</th>
              <th>Время создания задачи</th>
              <th>Id колонки родителя</th>
              <th>Задача выполнена</th>
              <th>Массив Id подзадач</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, id) => (
              <tr key={id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.timestamp}</td>
                <td>{task.columnId}</td>
                <td>{task.completed}</td>
                <td>{task.subtasks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
