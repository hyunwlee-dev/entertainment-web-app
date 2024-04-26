import { signOut } from "@/auth";

export default function TvSeriesPage() {
  return (
    <>
      Search for TV series
      TV Series
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
    </>
  );
}










