import Container from "@/app/ui/container";
import Logo from "@/app/ui/logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Logo />
      {children}
    </Container>
  );
}
