import dynamic from 'next/dynamic';
// import ErrorPage500Client from './ErrorPage500Client';

// Dynamically import the client component with SSR disabled
const ErrorPage500Client = dynamic(() => import('./ErrorPage500Client'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function ErrorPage404Page() {
  return <ErrorPage500Client />;
}