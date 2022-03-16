import { useCallback } from 'react';
import { useRouter } from 'next/router';

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged as onFirebaseAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GithubAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import { LoginUserType } from '../types/LoginUserType';

export const useAuth = () => {
  const router = useRouter();
  const login = useCallback((email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        router.replace('/');
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const loginWithGithub = useCallback(() => {
    const ghProvider = new GithubAuthProvider();
    signInWithPopup(auth, ghProvider)
      .then(() => {})
      .catch((err) => {
        alert(err);
      });
  }, []);

  const register = useCallback((email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {})
      .catch((err) => {
        alert(err);
      });
  }, []);

  const logout = useCallback(() => {
    signOut(auth).then((res) => console.log(res));
  }, []);

  const onAuthStateChanged = (
    callback: (user: LoginUserType | null) => void
  ) => {
    const auth = getAuth(firebaseApp);

    onFirebaseAuthStateChanged(auth, (user) => {
      const userInfo: LoginUserType | null = user
        ? {
            name: user?.displayName,
            email: user?.email,
            isAdmin: true,
          }
        : null;
      callback(userInfo);
    });
  };

  return { login, loginWithGithub, register, logout, onAuthStateChanged };
};

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
