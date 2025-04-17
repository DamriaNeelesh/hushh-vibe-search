import dynamic from 'next/dynamic';

// Dynamically import the client component with SSR disabled
const ErrorPage500Client = dynamic(() => import('../components/ErrorPage500/ErrorPage500Client'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function ErrorPage500Route() {
  return <ErrorPage500Client />;
} 