// "use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react"; 
import Slide1 from "./components/svg/slideImage1.svg";
import Slide3 from "./components/svg/slideImage3.svg";
// import { useRouter } from "next/navigation";
// import services from "./services/services";
import Resources from "./resources/resources";
import VibeSearchGif from "../app/resources/images/VibeSearch.gif";
// import getUserDetails from "./services/authentication/getUserDetails";
// import ToBeLaunched from "./components/ToBeLaunched/ToBeLaunched";
// import Head from "next/head";
// import utilities from "./components/utilities/utilities";
import dynamic from 'next/dynamic';
// import { HushhButton } from "hushh-button-private-1";
const slides = [
  {
    image: Slide1,
    text: "Shop Smoothly,",
    text2: "Save the Maze for Game Night",
  },
  {
    image: VibeSearchGif,
    text: "Type like you talk,",
    text2: " Vibe gets it",
  },
  {
    image: Slide3,
    text: "Spot a style you love?",
    text2: "Let's find its twin",
  },
];

// Metadata for the home page
export const metadata = {
  title: "Vibe Search - match your perfect outfit with us",
  description:
    "Find perfect items to express your individuality in just one click with our vibe search",
  keywords:
    "AI shopping, semantic search, personalized shopping, privacy protection, global fashion brands",
  openGraph: {
    title: "Home - Vibe Search",
    description:
      "Explore Vibe Search, a platform that revolutionizes online shopping with AI and privacy-focused features.",
    images: [Resources.images.VibeLogo.src],
    url: "https://www.vibesearch.ai",
  },
  twitter: {
    card: "summary_large_image",
  },
};

// Dynamically import the client component with SSR disabled
const HomeClient = dynamic(() => import('./HomeClient'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function Home() {
  return <HomeClient />;
}