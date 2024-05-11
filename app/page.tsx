import { signOut } from "@/auth";
import Navigation from "./ui/common/navigation";
import Container from "./ui/common/container";

export default function Home() {
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
        version minor upgrade
      </Container>
    </>
  );
}
