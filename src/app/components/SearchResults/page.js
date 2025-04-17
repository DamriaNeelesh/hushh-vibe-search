// 'use client';

import React from 'react';
import dynamic from 'next/dynamic';
// import SearchResultsClient from './SearchResultsClient';

// Dynamically import the client component with SSR disabled
const SearchResultsClient = dynamic(() => import('./SearchResultsClient'), {
    ssr: false,
    loading: () => <div>Loading Search...</div>
  });

export default function SearchClient() {    
  return (
    <SearchResultsClient />
  );
}