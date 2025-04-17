import dynamic from 'next/dynamic';

// Dynamically import the client component with SSR disabled
const ErrorNoLoginClient = dynamic(() => import('../components/ErrorNoLogin/ErrorNoLoginClient'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function ErrorNoLoginRoute() {
  return <ErrorNoLoginClient />;
} 