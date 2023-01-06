import Link from 'next/link';
import styles from './Menu.module.scss';

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <Link href={'/'}>Главная</Link>
      <Link href={'/dashboard'}>Личный кабинет</Link>
      <Link href={'/login'}>Вход</Link>
      <Link href={'/signup'}>Регистрация</Link>
      <Link href={'/admin'}>Admin</Link>
      <Link href={'https://js-course.ru/courses/show/62b1824805964a1386560a8e'}>Lesson 2.14.41</Link>
    </div>
  );
};
