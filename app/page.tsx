import { signOut } from "@/auth";

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
        <button>
          Sign Out
        </button>
      </form>
    </main>
  );
}
