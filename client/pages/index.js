import Head from 'next/head';
import { Menu } from '../conponents/Menu';

export default function Home({ server_host }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Menu server_host={server_host} />
    </>
  );
}
