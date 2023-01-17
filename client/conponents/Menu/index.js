import React from 'react';
import Link from 'next/link';
import styles from './Menu.module.scss';

export const Menu = () => {
  const [loading, setLoading] = React.useState(true);
  const [authorised, setAuthorised] = React.useState(undefined);
  const [role, setRole] = React.useState(undefined);

  const server_host =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:9001'
      : 'https://crm.servertiit.keenetic.pro';

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
      setAuthorised(true);
      setRole(data.role);
    } else {
      setLoading(false);
    }
  }
  return (
    <div className={styles.menu}>
      <div>
        <Link href={'/'}>Главная</Link>
      </div>
      <div>
        <Link href={'/clients'}>Клиенты</Link>
      </div>
      <div>
        <Link href={'/applications'}>Заявки</Link>
      </div>
      <div>
        <Link href={'/products'}>Товары</Link>
      </div>
      <div>
        <Link href={'/supply'}>Снабжение</Link>
      </div>
      <div>
        {' '}
        <Link href={'/tasks'}>Карточки</Link>
      </div>
      <div>
        <Link href={'/dashboard'}>Личный кабинет</Link>
      </div>
      <div>{!authorised && <Link href={'/login'}>Вход</Link>}</div>
      <div>
        <Link href={'/signup'}>Регистрация</Link>
      </div>
      <div> {role === 'admin' && <Link href={'/admin'}>Admin</Link>}</div>
      <div>{authorised && <a href={server_host + '/users/logout'}>Выход</a>}</div>
      <div>
        {' '}
        <Link href={'https://js-course.ru/courses/show/62b1824805964a1386560a8e'}>
          Lesson 3.11.17
        </Link>
      </div>
      <div>
        <Link href={'/directory'}>Справочник</Link>
      </div>
    </div>
  );
};
