import { Logo } from "@ui/common";
import styles from "@app/(account)/layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
      <Logo className={styles.logo} />
      {children}
    </main>
  );
}
