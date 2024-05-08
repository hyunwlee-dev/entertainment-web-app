import Container from "@/app/ui/common/container";
import Logo from "@/app/ui/common/logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Logo />
      {children}
    </Container>
  );
}
