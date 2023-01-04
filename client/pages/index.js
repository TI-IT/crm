import Head from 'next/head';
import Image from 'next/image';
import { Menu } from '../conponents/Menu';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Image className={''} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
      <Menu />
    </>
  );
}
