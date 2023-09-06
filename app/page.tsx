import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from '../styles/Home.module.css';

function Page() {
  return (
    <main className={styles.main}>
        <h1>RainbowKit Test</h1>
        <ConnectButton />
  </main>
  );
}

export default Page;