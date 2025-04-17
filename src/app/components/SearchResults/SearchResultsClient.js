'use client';

import React from 'react';
import dynamic from 'next/dynamic';
// import SearchResults from './SearchResults';

const SearchResults = dynamic(() => import('./SearchResults'), {
  ssr: false,
  loading: () => <div>Loading Search...</div>
});

export default function SearchResultsClient() {
  return <SearchResults />;
} 