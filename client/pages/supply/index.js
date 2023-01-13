import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import styles from './Task.module.scss';
import { Menu } from '../../conponents/Menu';
import logoImage from '../../public/logo/logo.png';

export default function Supply({ server_host }) {
  const [products, setProducts] = React.useState([]);

  React.useEffect(test, []);

  function test() {
    // fetch(server_host + '/tasks/getalltasks', {
    //   method: 'get',
    //   credentials: 'include',
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     if (data) {
    //       setTasks(data.tasks);
    //     }
    //   });
  }

  return (
    <>
      <Head>
        <title>Снабжение Supply</title>
      </Head>
      <Menu />
      <div className={styles.containerTable}>
        <div className={styles.tableResponsive}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>№ПП</th>
                <th>Код</th>
                <th>Наименование</th>
                <th>Отделка</th>
                <th>Кол-во</th>
                <th>Ед. изм.</th>
                <th>Цена руб.</th>
                <th>Сумма руб.</th>
                <th>Рисунок</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Body №ПП</td>
                <td>Body Код</td>
                <td>Body Наименование</td>
                <td>Body Отделка</td>
                <td>Body Кол-во</td>
                <td>Body Ед. изм.</td>
                <td>Body Цена руб.</td>
                <td>Body Сумма руб.</td>
                <td>Body Рисунок</td>
              </tr>
              <tr>
                <td>Body №ПП</td>
                <td>Body Код</td>
                <td>Body Наименование</td>
                <td>Body Отделка</td>
                <td>Body Кол-во</td>
                <td>Body Ед. изм.</td>
                <td>Body Цена руб.</td>
                <td>Body Сумма руб.</td>
                <td>Body Рисунок</td>
              </tr>
              <tr>
                <td>Body №ПП</td>
                <td>Body Код</td>
                <td>Body Наименование</td>
                <td>Body Отделка</td>
                <td>Body Кол-во</td>
                <td>Body Ед. изм.</td>
                <td>Body Цена руб.</td>
                <td>Body Сумма руб.</td>
                <td>Body Рисунок</td>
              </tr>
              <tr>
                <td>Body №ПП</td>
                <td>Body Код</td>
                <td>Body Наименование</td>
                <td>Body Отделка</td>
                <td>Body Кол-во</td>
                <td>Body Ед. изм.</td>
                <td>Body Цена руб.</td>
                <td>Body Сумма руб.</td>
                <td>Body Рисунок</td>
              </tr>
              <tr>
                <td>Body №ПП</td>
                <td>Body Код</td>
                <td>Body Наименование</td>
                <td>Body Отделка</td>
                <td>Body Кол-во</td>
                <td>Body Ед. изм.</td>
                <td>Body Цена руб.</td>
                <td>Body Сумма руб.</td>
                <td>Body Рисунок</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
