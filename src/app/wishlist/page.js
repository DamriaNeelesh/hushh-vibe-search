import dynamic from 'next/dynamic';
import Resources from "../resources/resources"; // Assuming usage for metadata

// Metadata for the wishlist page
export const metadata = {
  title: "My Wishlist - Vibe Search",
  description: "View and manage your saved items on Vibe Search.",
  // Add other relevant metadata
};

// Dynamically import the client component with SSR disabled
const WishlistClient = dynamic(() => import('./WishlistClient'), {
  ssr: false,
  loading: () => <div>Loading wishlist...</div> // Or a proper skeleton loader
});

// Server component entry point for the route
export default function WishlistPage() {
  return <WishlistClient />;
}
