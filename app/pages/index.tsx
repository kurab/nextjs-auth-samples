import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { signOut, useSession } from 'next-auth/react';
import RestrictedMessage from '../components/atoms/RestrictedMessage';
import LoadingSpinner from '../components/atoms/LoadingSpinner';
import { useState } from 'react';

const Home: NextPage = () => {
  const { data: session } = useSession();
  const [logoutLoading, setLoading] = useState<boolean>(false);
  const onClickLogout = async () => {
    setLoading(true);
    await signOut();
  };

  if (!session)
    return (
      <RestrictedMessage
        class={styles.containerContent}
        message={'Login Required'}
      />
    );

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
      {logoutLoading ? (
        <button className={styles.btnLogout}>
          <LoadingSpinner size={3} margin={8} color={'#fff'} />
        </button>
      ) : (
        <button className={styles.btnLogout} onClick={onClickLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Home;
