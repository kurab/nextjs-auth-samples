import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Terms.module.css';

const Terms: NextPage = () => {
  return (
    <div className={styles.containerContent}>
      <Head>
        <title>Terms page | Auth Samples with Next.js + typescript</title>
        <meta
          name="description"
          content="Terms | Auth Samples with Next.js + typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Terms</h1>
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

export default Terms;
