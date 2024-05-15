import Logo from "@/app/ui/common/logo";
import styles from "@/app/(account)/layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
      <Logo className={styles.logo} />
      {children}
    </main>
  );
}
