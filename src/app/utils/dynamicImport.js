import dynamic from 'next/dynamic';

/**
 * Safely import components that use browser APIs
 * This prevents "document is not defined" errors during SSR
 */
export function dynamicImport(importFunc) {
  return dynamic(importFunc, {
    ssr: false,
    loading: () => <div>Loading...</div>
  });
} 