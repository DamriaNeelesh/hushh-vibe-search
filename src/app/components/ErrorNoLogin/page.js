import dynamic from 'next/dynamic';

// Dynamically import the client component with SSR disabled
const ErrorNoLoginClient = dynamic(() => import('./ErrorNoLoginClient'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function ErrorNoLoginPage() {
  return <ErrorNoLoginClient />;
}