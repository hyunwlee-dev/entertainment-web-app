import Container from "@/app/ui/common/container";
import Navigation from "@/app/ui/common/navigation";
import { signOut } from "@/auth";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation
        signOut={
          async () => {
            'use server'
            await signOut()
          }
        }
      />
      <Container as='main'>
        {children}
      </Container>
    </>
  );
}
