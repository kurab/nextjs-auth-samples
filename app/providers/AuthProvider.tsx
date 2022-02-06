import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AuthProvider: NextPage = ({ children }) => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session && router.isReady) {
      router.replace('/auth/login');
    }
  }, [session, router]);

  if (!session) {
    return (
      <div className={styles.containerContent}>
        <h1>Login Required</h1>
        <a href="/auth/login" className={styles.btnLogin}>
          Move to Login Page
        </a>
      </div>
    );
  } else {
    return <>{children}</>;
  }
};

export default AuthProvider;
