import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AuthLayout from '../components/templates/AuthLayout';
import Layout from '../components/templates/Layout';
import AuthProvider from '../providers/AuthProvider';
import { SessionProvider } from 'next-auth/react';

//MyApp.getInitialProps = async () => ({ pageProps: {} });
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  switch (pageProps.layout) {
    case 'auth': {
      return (
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      );
    }
    default: {
      return (
        <SessionProvider session={session}>
          <AuthProvider>
            <AuthLayout>
              <Component {...pageProps} />
            </AuthLayout>
          </AuthProvider>
        </SessionProvider>
      );
    }
  }
}

export default MyApp;
