import { createContext, ReactNode, useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { LoginUserType } from '../types/LoginUserType';
import { useAuth } from '../hooks/useAuth';
import styles from '../styles/Home.module.css';

export type LoginUserContextType = {
  loginUser: LoginUserType | null | undefined;
};

export const LoginUserContext = createContext({} as LoginUserContextType);

export const AuthProvider = (props: { children: ReactNode }) => {
  const { onAuthStateChanged } = useAuth();
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUserType | null | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged((loginUser) => {
      setLoginUser(loginUser);
      setLoading(false);
    });
  }, []);

  if (!loginUser) {
    return (
      <div className={styles.containerContent}>
        <h1>Login Required</h1>
        <a href="/auth/login" className={styles.btnLogin}>
          Move to Login Page
        </a>
      </div>
    );
  } else {
    return (
      <LoginUserContext.Provider value={{ loginUser }}>
        {children}
      </LoginUserContext.Provider>
    );
  }
};
