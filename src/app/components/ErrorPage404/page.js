import dynamic from 'next/dynamic';

// Dynamically import the client component with SSR disabled
const ErrorPage404Client = dynamic(() => import('./ErrorPage404Client'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function ErrorPage404Page() {
  return <ErrorPage404Client />;
}