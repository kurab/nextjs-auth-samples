import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Terms.module.css';
import { useSession } from 'next-auth/react';
import RestrictedMessage from '../components/atoms/RestrictedMessage';

const Admin: NextPage = () => {
  const { data: session } = useSession();

  if (!session || (session && session.user.isAdmin === false)) {
    return (
      <RestrictedMessage
        class={styles.containerContent}
        message={'Display Forbidden.'}
      />
    );
  }
  return (
    <div className={styles.containerContent}>
      <Head>
        <title>Admin page | Auth Samples with Next.js + typescript</title>
        <meta
          name="description"
          content="Terms | Auth Samples with Next.js + typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Admin Restricted!</h1>
      <p className={styles.paraTerms}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora
        reprehenderit dicta ullam, molestiae nulla earum necessitatibus. Iure
        eaque soluta vel laboriosam sint ipsum quibusdam itaque velit, tempore
        dolorem dolor.
      </p>
      <p className={styles.paraTerms}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora
        reprehenderit dicta ullam, molestiae nulla earum necessitatibus. Iure
        eaque soluta vel laboriosam sint ipsum quibusdam itaque velit, tempore
        dolorem dolor.
      </p>
    </div>
  );
};

export default Admin;
