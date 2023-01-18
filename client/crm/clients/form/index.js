import React from 'react';
import { useRouter } from 'next/router';
import styles from './Form.module.scss';

export default function TableaddClients({ server_host }) {
  const [citys, setCitys] = React.useState([]);
  const [addCity, setAddCity] = React.useState({});
  const [hide, sethide] = React.useState(styles.hide);
  const [titles, setTitles] = React.useState({
    surname: 'Фамилия',
    name: 'Имя',
    patronymic: 'Отчество',
    phone: 'Телефон',
    email: 'Email',
    organization: 'Организация',
    city: 'Город',
    address: 'Адрес',
    notes: 'Примечания',
  });
  const [clients, setClients] = React.useState({
    surname: '',
    name: '',
    patronymic: '',
    phone: '',
    email: '',
    organization: '',
    city: '',
    address: '',
    notes: '',
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

  function changeCity(name, value) {
    setAddCity({
      ...addCity,
      [name]: value,
    });
  }

  React.useEffect(loadCitys, []);

  function loadCitys() {
    fetch(server_host + '/directory/citys/get/all', {
      method: 'get',
      credentials: 'include',
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.ok) {
          setCitys(data.citys);
        }
      });
  }

  async function addClients() {
    setDisabled(true);
    setMessage('');
    if (!clients.name || !clients.phone || !clients.organization) {
      setMessage('Заполните нужные поля поля');
      setDisabled(false);
      return;
    }

    const res = await fetch(server_host + '/clients/add', {
      method: 'post',
      credentials: 'include',
      body: JSON.stringify(clients),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    if (data.ok) {
      setMessage('Клиент добавлен');
      setDisabled(false);
      setClients({
        surname: '',
        name: '',
        patronymic: '',
        phone: '',
        email: '',
        organization: '',
        city: '',
        address: '',
        notes: '',
      });
      router.push('/applications');
    } else {
      setDisabled(false);
      setMessage('Ошибка попробуйте другие данные');
    }
  }

  function displayShow() {
    sethide(styles.show);
  }
  function displayHide() {
    sethide(styles.hide);
  }
  async function directoryAddCity() {
    sethide(styles.hide);
    try {
      const res = await fetch(server_host + '/directory/city/add', {
        method: 'post',
        credentials: 'include',
        body: JSON.stringify(addCity),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      if (data.ok) {
        setMessage('Город добавлен');
        loadCitys();
        setDisabled(false);
      } else {
        setDisabled(false);
        setMessage('Ошибка попробуйте другие данные');
      }
    } catch (error) {
      alert('Сервер не отвечает');
    }
  }

  return (
    <>
      <h3 className={styles.center}>Добавить Клиента</h3>
      <div className={styles.center}>{message}</div>
      <div className={styles.card}>
        <div className={styles.bigCard}>
          <div className={styles.miniCard2col}>
            <span>
              <label>{titles.surname}</label>
            </span>
            <div className={styles.gridInput}>
              <span>
                <input
                  type={'text'}
                  name={'surname'}
                  placeholder={'Фамилия'}
                  onChange={(e) => changeClients('surname', e.target.value)}
                  value={clients.surname}
                  onClick={displayHide}
                ></input>
              </span>
            </div>
          </div>
          <div className={styles.miniCard2col}>
            <span>
              <label>{titles.name}</label>
            </span>
            <div className={styles.gridInput}>
              <span>
                <input
                  className={styles.red}
                  type={'text'}
                  name={'name'}
                  placeholder={'Имя'}
                  onChange={(e) => changeClients('name', e.target.value)}
                  value={clients.name}
                  onClick={displayHide}
                ></input>
              </span>
            </div>
          </div>
          <div className={styles.miniCard2col}>
            <span>
              <label>{titles.patronymic}</label>
            </span>
            <div className={styles.gridInput}>
              <span>
                <input
                  type={'text'}
                  name={'patronymic'}
                  placeholder={'Отчество'}
                  onChange={(e) => changeClients('patronymic', e.target.value)}
                  value={clients.patronymic}
                  onClick={displayHide}
                ></input>
              </span>
            </div>
          </div>
          <div className={styles.miniCard2col}>
            <span>
              <label>{titles.phone}</label>
            </span>
            <div className={styles.gridInput}>
              <span>
                <input
                  className={styles.red}
                  type={'number'}
                  name={'phone'}
                  placeholder={'Телефон'}
                  onChange={(e) => changeClients('phone', e.target.value)}
                  value={clients.phone}
                  onClick={displayHide}
                ></input>
              </span>
            </div>
          </div>
          <div className={styles.miniCard2col}>
            <span>
              <label>{titles.email}</label>
            </span>
            <div className={styles.gridInput}>
              <span>
                <input
                  type={'text'}
                  name={'email'}
                  placeholder={'Email'}
                  onChange={(e) => changeClients('email', e.target.value)}
                  value={clients.email}
                  onClick={displayHide}
                ></input>
              </span>
            </div>
          </div>
        </div>

        <div className={styles.bigCard}>
          <div className={styles.miniCard2col}>
            <span>
              <label>{titles.organization}</label>
            </span>
            <div className={styles.gridInput}>
              <span>
                <input
                  className={styles.red}
                  type={'text'}
                  name={'organization'}
                  placeholder={'Организация'}
                  onChange={(e) => changeClients('organization', e.target.value)}
                  value={clients.organization}
                  onClick={displayHide}
                ></input>
              </span>
            </div>
          </div>
          <div className={styles.miniCard3col}>
            <span>
              <label>{titles.city}</label>
            </span>
            <div className={styles.gridSelect}>
              <select onChange={(e) => changeClients('city', e.target.value)}>
                <option>{''}</option>
                {citys.map((city, id) => (
                  <option key={id}>{city}</option>
                ))}
              </select>
              <button className={styles.gridButton} type={'button'} onClick={displayShow}>
                +
              </button>
            </div>
          </div>
          <div className={styles.miniCard2col}>
            <span>
              <label>{titles.address}</label>
            </span>
            <div className={styles.gridInput}>
              <span>
                <textarea
                  type={'text'}
                  name={'address'}
                  placeholder={'Адрес'}
                  onChange={(e) => changeClients('address', e.target.value)}
                  value={clients.address}
                  onClick={displayHide}
                ></textarea>
              </span>
            </div>
          </div>
          <div className={styles.miniCard2col}>
            <span>
              <label>{titles.notes}</label>
            </span>
            <div className={styles.gridInput}>
              <span>
                <textarea
                  type={'text'}
                  name={'notes'}
                  placeholder={'Примечания'}
                  onChange={(e) => changeClients('notes', e.target.value)}
                  value={clients.notes}
                  onClick={displayHide}
                ></textarea>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.center}>
          <span>
            <button
              className={styles.button}
              type={'button'}
              onClick={addClients}
              disabled={disabled}
            >
              Добавить
            </button>
          </span>
        </div>
      </div>
      <div className={hide}>
        <div className={styles.gridWindow}>
          <div className={styles.gridHeader}>
            <div>📂</div>
            <button onClick={displayHide} className={styles.gridButton}>
              ✖
            </button>
          </div>
          <div className={styles.gridContent}>
            <div className={styles.gridInput}>
              <span>
                <input
                  type={'text'}
                  name={'city'}
                  placeholder={'Город'}
                  onChange={(e) => changeCity('city', e.target.value)}
                  value={addCity.city}
                ></input>
              </span>
            </div>

            <div className={styles.GroupChildrenButton}>
              <button className={styles.button} type={'button'} onClick={directoryAddCity}>
                добавить
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
