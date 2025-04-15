declare module 'hushh-button-sdk-1' {
  export interface Question {
    question: string;
    options: string[];
    answer: string[];
  }

  export interface HushhButtonProps {
    questions: Question[];
    searchTerm?: string;
    onOptionsSelected?: (options: string[]) => void;
  }

  export const HushhButton: React.FC<HushhButtonProps>;
}

// Extend the Window interface to include the SDK
declare global {
  interface Window {
    hushhButtonSDK?: {
      handleCurate: () => string[];
    };
  }
} 