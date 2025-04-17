import dynamic from 'next/dynamic';

// Dynamically import the client component with SSR disabled
const CheckYourVibeClient = dynamic(() => import('../components/ToBeLaunched/CheckYourVibe/CheckYourVibeClient'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function CheckYourVibeRoute() {
  return <CheckYourVibeClient />;
} 