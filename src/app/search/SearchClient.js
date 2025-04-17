'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the SearchResultsClient component
const SearchResultsClient = dynamic(
  () => import('../components/SearchResults/SearchResultsClient'),
  {
    ssr: false,
    loading: () => <div>Loading search results...</div>
  }
);

// Fallback component for Suspense
function LoadingFallback() {
  return <div>Loading search results...</div>;
}

export default function SearchClient() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <SearchResultsClient />
    </Suspense>
  );
} 