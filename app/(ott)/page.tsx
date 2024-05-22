import { Suspense } from "react";
import { TrendingList, TrendingListSkeleton, CardList, CardListSkeleton, SearchBar } from "@ui/common";

export default async function Home({ searchParams }: { searchParams?: { q?: string } }) {
  const query = searchParams?.q || '';
  return (
    <>
      <Suspense fallback={<div>Loading SearchBar...</div>}>
        <SearchBar />
      </Suspense>
      {query === '' ?
        (<Suspense fallback={<TrendingListSkeleton />}>
          <TrendingList title='Trending' />
        </Suspense>) : null
      }
      <Suspense fallback={<CardListSkeleton />}>
        <CardList title='Recommended for you' category='ALL' query={query} />
      </Suspense>
    </>
  );
}
