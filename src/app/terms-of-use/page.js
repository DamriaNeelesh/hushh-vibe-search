import React from 'react';
import TermsOfUseClient from './TermsOfUseClient';
import Resources from '../resources/resources';

// Metadata can be exported from server components
export const metadata = {
  title: "Terms of Service - Vibe Search",
  description: "Review the terms of service for using Vibe Search and understand your rights and responsibilities.",
  keywords: "terms of service, user agreement, Vibe Search",
  openGraph: {
    title: "Terms of Service - Vibe Search",
    description: "Understand the terms and conditions for using Vibe Search.",
    images: [Resources.images.VibeLogo.src],
    url: "https://www.vibesearch.ai/terms-of-service",
  },
  twitter: {
    card: "summary_large_image",
  },
};

// This is a server component that can export metadata
export default function TermsOfUsePage() {
  // Render the client component
  return <TermsOfUseClient />;
}
