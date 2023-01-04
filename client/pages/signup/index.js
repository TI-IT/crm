import Link from 'next/link';
import Head from 'next/head';
import styles from './Signup.module.scss';
import { Menu } from '../../conponents/Menu';

export default function Signup() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Menu />
      <div className={styles.container}>
        <div>
          <h2>Регистрация</h2>
        </div>
        <form>
          <div>
            <label>email </label>
            <div>
              <input type={'text'} name={'email'} />
            </div>
          </div>
          <div>
            <label>Пароль </label>
            <div>
              <input type={'password'} />
            </div>
          </div>
          <div>
            <label>Повторение пароля </label>
            <div>
              <input type={'password'} />
            </div>
          </div>
          <div>
            <button type={'button'}>Зарегистрироватся</button>
          </div>
        </form>
      </div>
    </>
  );
}
