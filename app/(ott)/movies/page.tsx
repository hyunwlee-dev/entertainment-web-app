import { Suspense } from "react";
import { CardList, CardListSkeleton, SearchBar } from "@ui/common";

export default async function MoviePage({ searchParams }: { searchParams?: { q?: string } }) {
  const query = searchParams?.q || '';
  return (
    <>
      <Suspense fallback={<div>Loading SearchBar...</div>}>
        <SearchBar />
      </Suspense>
      <Suspense fallback={<CardListSkeleton />}>
        <CardList title='Movies' category='Movie' query={query} />
      </Suspense>
    </>
  );
}
