import Logo from "@/app/ui/common/logo";
import Container from "@/app/ui/common/container";
import styles from "@/app/(account)/layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Logo className={styles.logo} />
      {children}
    </Container>
  );
}
