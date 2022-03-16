import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AuthLayout from '../components/templates/AuthLayout';
import Layout from '../components/templates/Layout';
import { AuthProvider } from '../providers/AuthProvider';

//MyApp.getInitialProps = async () => ({ pageProps: {} });
function MyApp({ Component, pageProps }: AppProps) {
  switch (pageProps.layout) {
    case 'auth': {
      return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      );
    }
    default: {
      return (
        <AuthProvider>
          <AuthLayout>
            <Component {...pageProps} />
          </AuthLayout>
        </AuthProvider>
      );
    }
  }
}

export default MyApp;
