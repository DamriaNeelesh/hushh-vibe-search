import dynamic from 'next/dynamic';
import Resources from '../resources/resources'; // For metadata

// Metadata for the search page
export const metadata = {
    title: "Search - Vibe Search",
    description: "Find perfect items to express your individuality in just one click with our vibe search.",
    keywords: "Vibe Search, Fashion, Vibe Match, Personal Stylist, AI Shopping, Style Recommendations",
    openGraph: {
      title: "Search - Vibe Search",
      description: "Discover new products and brands aligned with your interests using Vibe Search.",
      images: [Resources?.images?.VibeLogo?.src || '/default-og-image.png'], // Use optional chaining and provide fallback
      url: "https://www.vibesearch.ai/search",
    },
    twitter: {
      card: "summary_large_image",
    },
};

// Dynamically import the client component with SSR disabled
const SearchClient = dynamic(() => import('./SearchClient'), {
  ssr: false,
  loading: () => <div>Loading Search...</div>
});

// This remains a Server Component
export default function SearchPage() {
  return <SearchClient />;
}
