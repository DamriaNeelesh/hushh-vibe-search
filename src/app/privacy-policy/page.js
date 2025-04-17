import dynamic from 'next/dynamic';
import Resources from "../resources/resources"; // Assuming you use this for metadata images

// Metadata for the privacy policy page
export const metadata = {
  title: "Privacy Policy - Vibe Search",
  description: "Understand how Vibe Search collects, uses, and protects your personal information.",
  keywords: "privacy policy, data protection, user privacy, Vibe Search",
  openGraph: {
    title: "Privacy Policy - Vibe Search",
    description: "Review our commitment to protecting your privacy.",
    // Make sure Resources.images.VibeLogo.src is valid or replace it
    images: [Resources?.images?.VibeLogo?.src || '/default-og-image.png'], 
    url: "https://www.vibesearch.ai/privacy-policy", // Update with your actual URL
  },
  twitter: {
    card: "summary_large_image",
  },
};

// Dynamically import the client component with SSR disabled
const PrivacyPolicyClient = dynamic(() => import('./PrivacyPolicyClient'), {
  ssr: false,
  loading: () => <div>Loading...</div> // Or a proper skeleton loader
});

// Server component entry point for the route
export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
