import dynamic from 'next/dynamic';

// Dynamically import the client component with SSR disabled
const ErrorPage400Client = dynamic(() => import('./ErrorPage400Client'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function ErrorPage400Page() {
  return <ErrorPage400Client />;
}