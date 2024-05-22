import { Suspense } from "react";
import { signOut } from "@/auth";
import { Navigation, Container, TrendingList, TrendingListSkeleton, CardList, CardListSkeleton, SearchBar } from "@ui/common";

export default async function Home({ searchParams }: { searchParams?: { q?: string } }) {
  const query = searchParams?.q || '';
  return (
    <>
      <Navigation
        signOut={
          async () => {
            'use server';
            await signOut();
          }
        }
      />
      <Container as='main'>
        <Suspense fallback={<div>Loading SearchBar...</div>}>
          <SearchBar />
        </Suspense>
        <Suspense fallback={<TrendingListSkeleton />}>
          <TrendingList title='Trending' />
        </Suspense>
        <Suspense fallback={<CardListSkeleton />}>
          <CardList title='Recommended for you' query={query} />
        </Suspense>
      </Container>
    </>
  );
}

