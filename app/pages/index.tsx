import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useAuth } from '../hooks/useAuth';

const Home: NextPage = () => {
  const { logout } = useAuth();

  const onClickLogout = async () => {
    await logout();
  };

  return (
    <div className={styles.containerContent}>
      <Head>
        <title>
          Home! Sweet Home! | Auth Samples with Next.js + typescript
        </title>
        <meta
          name="description"
          content="Home | Auth Samples with Next.js + typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home! Sweet Home!</h1>
      <Image
        src="/cat.png"
        className={styles.imgKeyVisual}
        width={400}
        height={400}
        alt="Home Sweet Home"
      />
      <br />
      <button className={styles.btnLogout} onClick={onClickLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
