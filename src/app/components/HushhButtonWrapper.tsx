'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useSearchParams, useRouter } from 'next/navigation';
import { isBrowser } from '../utils/browserUtils';

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
  }
];

const HushhButton: React.ComponentType<any> = dynamic(
  () => import('hushh-button-private-1').then(mod => mod.HushhButton), 
  { ssr: false }
);

export default function HushhButtonWrapper() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const lastStoredOptions = useRef<string | null>(null);

  useEffect(() => {
    setMounted(true);

    const query = searchParams?.get('query') || '';
    setSearchQuery(query);

    try {
      const stored = localStorage.getItem('selectedOptions');
      if (stored) {
        const parsed = JSON.parse(stored);
        setSelectedOptions(parsed);
        lastStoredOptions.current = stored;
      }
    } catch (e) {
      console.error('Error reading from localStorage:', e);
    }
  }, [searchParams]);

  const handleResponse = useCallback((response: any) => {
    console.log("Received response:", response);
    const newOptions = response?.answer || [];
    setSelectedOptions(newOptions);

    if (isBrowser()) {
      try {
        const optionsString = JSON.stringify(newOptions);
        if (optionsString !== lastStoredOptions.current) {
          localStorage.setItem('selectedOptions', optionsString);
          lastStoredOptions.current = optionsString;
          console.log("Stored options:", optionsString);
        }
      } catch (e) {
        console.error('Error writing to localStorage:', e);
      }
    }
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000, pointerEvents: 'auto' }}>
      <HushhButton
        questions={questionsArray}
        onResponse={handleResponse}
      />
    </div>
  );
}
