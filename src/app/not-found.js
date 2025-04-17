import dynamic from 'next/dynamic';

// Dynamically import the client component with SSR disabled
const ErrorPage404Client = dynamic(() => import('./components/ErrorPage404/ErrorPage404Client'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function NotFound() {
  return <ErrorPage404Client />;
}