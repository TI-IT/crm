import Head from 'next/head';
import Image from 'next/image';
import { Menu } from '../conponents/Menu';

export default function Home({ server_host }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Menu server_host={server_host} />
      <Image className={''} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
    </>
  );
}
