import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../../styles/Layout.module.css';

const Layout: NextPage = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <header>
        <ul className={styles.navLink}>
          <li>
            <Link href="/">
              <a>Home (restricted)</a>
            </Link>
          </li>
          <li>
            <Link href="/terms">
              <a>Terms</a>
            </Link>
          </li>
          <li>
            <Link href="/auth/login">
              <a>Login</a>
            </Link>
          </li>
          <li>
            <Link href="/auth/register">
              <a>Register</a>
            </Link>
          </li>
        </ul>
      </header>
      <main>{children}</main>
      <footer>
        <p className={styles.footerCopy}>&copy; TAKT R&amp;D Co.,Ltd.</p>
      </footer>
    </div>
  );
};

export default Layout;
