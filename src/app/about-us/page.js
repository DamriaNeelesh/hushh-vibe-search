import React from 'react';
import AboutUsClient from './AboutUsClient';
import Resources from "../resources/resources";

// Metadata can be exported from server components
export const metadata = {
  title: "About Us - Vibe Search",
  description:
    "Discover Vibe Search, an AI-powered shopping search engine that ensures privacy and delivers personalized shopping experiences.",
  keywords:
    "AI shopping, semantic search, personalized shopping, privacy protection, global fashion brands",
  openGraph: {
    title: "About Us - Vibe Search",
    description:
      "Learn about Vibe Search, a platform that revolutionizes online shopping with AI and privacy-focused features.",
    images: [Resources.images.VibeLogo.src],
    url: "https://www.vibesearch.ai/components/about-us",
  },
  twitter: {
    card: "summary_large_image",
  },
};

// This is a server component that can export metadata
export default function AboutUsPage() {
  // Render the client component
  return <AboutUsClient />;
}
