import Head from 'next/head';
import { Menu } from '../../conponents/Menu';

export default function Login() {
  return (
    <>
      <Head>
        <title>Вход</title>
      </Head>
      <Menu />
      <div>
        <h2>Домашняя страница</h2>
      </div>
    </>
  );
}
