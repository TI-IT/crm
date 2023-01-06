import React from 'react';
import Link from 'next/link';
import styles from './Menu.module.scss';

export const Menu = ({ server_host }) => {
  const [loading, setLoading] = React.useState(true);
  const [authorised, setAuthorised] = React.useState(undefined);
  const [role, setRole] = React.useState(undefined);

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
      <Link href={'/'}>Главная</Link>
      <Link href={'/dashboard'}>Личный кабинет</Link>
      {!authorised && <Link href={'/login'}>Вход</Link>}
      <Link href={'/signup'}>Регистрация</Link>
      {role === 'admin' && <Link href={'/admin'}>Admin</Link>}
      {authorised && <a href={server_host + '/users/logout'}>Выход</a>}
      <Link href={'https://js-course.ru/courses/show/62b1824805964a1386560a8e'}>
        Lesson 3.11.17
      </Link>
    </div>
  );
};
