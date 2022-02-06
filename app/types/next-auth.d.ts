import NextAuth, { DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: User;
  }

  interface User extends DefaultUser {
    isAdmin: boolean;
  }
}
