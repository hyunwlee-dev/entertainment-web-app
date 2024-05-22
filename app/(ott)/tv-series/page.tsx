import { Suspense } from "react";
import { CardList, CardListSkeleton, SearchBar } from "@ui/common";

export default async function TvSeriesPage({ searchParams }: { searchParams?: { q?: string } }) {
  const query = searchParams?.q || '';
  return (
    <>
      <Suspense fallback={<div>Loading SearchBar...</div>}>
        <SearchBar />
      </Suspense>
      <Suspense fallback={<CardListSkeleton />}>
        <CardList title='TV Series' category='TV Series' query={query} />
      </Suspense>
    </>
  );
}
