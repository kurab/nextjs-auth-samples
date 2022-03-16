import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import styles from '../../styles/auth/Login.module.css';
import { useAuth } from '../../hooks/useAuth';

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

  const { login, logout } = useAuth();

  const onSubmitLogin = (formData: any) => {
    console.log(formData);
    login(formData.email, formData.password);
  };
  const onClickGithubLogin = () => alert('github');

  const onClickLogout = () => {
    logout();
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
        <form onSubmit={handleSubmit(onSubmitLogin)}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            {...register('email', { required: true })}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            {...register('password', { required: true })}
          />
          <button
            type="submit"
            className={styles.btnAuthLogin}
            disabled={!isDirty || !isValid}
          >
            Login
          </button>
        </form>
        or
        <button className={styles.btnAuthGithub} onClick={onClickGithubLogin}>
          Login with GitHub
        </button>
      </div>
      <div className="other-option">
        <Link href="/auth/register">
          <a>Register</a>
        </Link>
      </div>
    </div>
  );
};

export default Login;
