import type { NextPage } from 'next';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import styles from '../../styles/auth/Login.module.css';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../../components/atoms/LoadingSpinner';

export const getServerSideProps = async (context: any) => ({
  props: {
    layout: 'auth',
  },
});

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm({ mode: 'onChange' });

  const { data: session } = useSession();
  const router = useRouter();
  const [loginLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (session && router.isReady) {
      setLoading(false);
      router.replace('/');
    }
  }, [session, router]);

  const onClickGithubLogin = async () => {
    setLoading(true);
    await signIn('github');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Login page | Auth Samples with Next.js + typescript</title>
        <meta
          name="description"
          content="Login | Auth Samples with Next.js + typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.authBox}>
        <h1>Login</h1>
        {loginLoading ? (
          <button className={styles.btnAuthGithub}>
            <LoadingSpinner size={3} margin={8} color={'#fff'} />
          </button>
        ) : (
          <button className={styles.btnAuthGithub} onClick={onClickGithubLogin}>
            Login with GitHub
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
