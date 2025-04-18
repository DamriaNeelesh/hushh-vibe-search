import dynamic from 'next/dynamic';

// Dynamically import the client component with SSR disabled
const CheckYourVibeClient = dynamic(() => import('./CheckYourVibeClient'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function CheckYourVibePage() {
  return <CheckYourVibeClient />;
}