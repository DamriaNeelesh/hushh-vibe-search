'use client';

import React from 'react';
import { HushhButton } from 'hushh-button-sdk-1';
import { useSearchParams } from 'next/navigation';

// Define the questions array
const questionsArray = [
  {
    question: "What are your plans for today?",
    options: ["Our products", "Our team", "Get recruited at Hushh", "Partner with us"],
    answer: []
  },
  {
    question: "What explains you the best?",
    options: ["User", "Agent", "Brand representative", "Fellow Developer", "Applicant"],
    answer: []
  },
  // ... other questions
];

export default function HushhButtonWrapper() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || ''; // Get search query from URL

  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '30px', 
      right: '30px', 
      zIndex: 1000,
      pointerEvents: 'auto' // Ensure clickability
    }}>
      <HushhButton
        questions={questionsArray}
        // searchTerm={query}
      />
    </div>
  );
}