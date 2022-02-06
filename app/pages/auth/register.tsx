import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import styles from '../../styles/auth/Register.module.css';

export const getServerSideProps = async (context: any) => ({
  props: {
    layout: 'auth',
  },
});

const Register: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isDirty, isValid },
  } = useForm({ mode: 'onChange' });

  const onSubmitRegister = (formData: any) => {
    console.log(formData);
  };
  const onClickGithubRegister = () => alert('github');

  return (
    <div className={styles.container}>
      <Head>
        <title>Register page | Auth Samples with Next.js + typescript</title>
        <meta
          name="description"
          content="Register | Auth Samples with Next.js + typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.authBox}>
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onSubmitRegister)}>
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
          <label>Password (confirm)</label>
          <input
            type="password"
            placeholder="Password - confirm"
            {...register('confirm', {
              required: true,
              validate: (value) => value === watch('password'),
            })}
          />
          <button
            type="submit"
            className={styles.btnAuthRegister}
            disabled={!isDirty || !isValid}
          >
            Register
          </button>
        </form>
        or
        <button
          className={styles.btnAuthRegisterGithub}
          onClick={onClickGithubRegister}
        >
          Register with GitHub
        </button>
      </div>
      <div className="other-option">
        <Link href="/auth/login">
          <a>Login</a>
        </Link>
      </div>
    </div>
  );
};

export default Register;
