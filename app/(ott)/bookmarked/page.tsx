import { Suspense } from "react";
import { CardList, CardListSkeleton, SearchBar } from "@ui/common";

export default async function BookmarkedPage({ searchParams }: { searchParams?: { q?: string } }) {
  const query = searchParams?.q || '';
  return (
    <>
      <Suspense fallback={<div>Loading SearchBar...</div>}>
        <SearchBar placeholder='Search for bookmarked shows' />
      </Suspense>
      <Suspense fallback={<CardListSkeleton />}>
        <CardList title='Bookmarked' category='Bookmarked' query={query} />
      </Suspense>
    </>
  );
}
