import { signOut } from "@/auth";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <main>
      version minor upgrade
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button >
          Sign Out
        </button>
      </form>
    </main>
  );
}
