"use client";
/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Text,
  Button,
  VStack,
  HStack,
  Circle,
  useBreakpointValue,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slide1 from "./components/svg/slideImage1.svg";
import Slide2 from "./components/svg/slideImage2.svg";
import Card1 from "./components/svg/card1.svg";
import Card2 from "./components/svg/card2.svg";
import Slide3 from "./components/svg/slideImage3.svg";
import GoogleIcon from "./components/svg/googleIcon.svg";
import AppleIcon from "./components/svg/appleIcon.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SearchGif from "./components/gif/searchGif.gif";
import services from "./services/services";
import VibeText from "./components/svg/vibeText.svg";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "antd/es/modal/Modal";
import Resources from "./resources/resources";
import VibeSearchGif from "../app/resources/images/VibeSearch.gif";
import getUserDetails from "./services/authentication/getUserDetails";
import utilities from "./components/utilities/utilities";
import ToBeLaunched from "./components/ToBeLaunched/ToBeLaunched";
import IntroSlide3 from "./components/Introduction/IntroSlide3";
import Home2 from "./components/Home2/home2";
import Head from "next/head";
import { metadata } from "./components/pagesComponent/homePage"; // Import metadata

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

// export const metadata = {
//   title: "Vibe Search - match your perfect outfit with us",
//   description:
//     "Find perfect items to express your individuality in just one click with our vibe search",
//   keywords:
//     "Vibe Search, The vibe search app lets find and store all your favorite products that you come across by just taking a picture or by typing, Fashion, Vibe Match, Vibe search your companion for fashion and style, Find your style with your own stylist, Find products based on image and text, Save all your liked products, Get insights on your Fit and Style, Share your best Fit with Family and Friends, Find that perfect Fit and perfect look with just a click of a button, Integrate You Vibe with Vibe Search, vibe search also enables users to share your style preferences in their Hushh Wallet, easy to share and access important information, such as Your Size, FIt, Brands , Budget and Purchase history, Fit Brands and Sizes, Your Budget and purchase history track, Vibe search is more than just an app its your personal stylist on tap of a button, Share and Benefit, Search Any Style, Image based search, Save all your searches, Share curated list of products according to your vibe and fit along with your friends and family, Search any style throughout the internet, Your Personal Fashion Stylist at your Fingertips, Vibe search utilizes advanced algorithms and AI technology to analyze the captured data Find the best fit, Users receive personalized recommendations, discover new products and brands aligned with their interests, and stay up-to-date with the latest trends with Gen AI",
// };

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null); // State for user details

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    // Check if the user has just signed up
    if (isSignedUp) {
      setIsModalOpen(true);
    }
  }, [isSignedUp]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const user = await getUserDetails(setUserDetails);
      if (!user) {
      } else {
        return user;
      }
    };
    fetchUserDetails();
  }, []); // Ensure this runs only on component mount

  useEffect(() => {
    setInterval(() => {
      isSignedUp ? "" : services.authentication.isLoggedIn(setIsSignedUp);
    }, 1000);
  }, []);

  useEffect(() => {
    isSignedUp ? setIsModalOpen(true) : "";
  }, [isSignedUp]);

  const handleGoogleSignIn = async () => {
    try {
      await services.authentication.googleSignIn();
    } catch (error) {}
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Show modal after 1 second

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000); //7 seconds delay for slide change

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    services.authentication.getSession();
  }, []);

  return (
    <>
      {/* <Home2/> */}
      {/* <IntroSlide3/> */}
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0]} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta name="twitter:card" content={metadata.twitter.card} />
      </Head>
      <ToBeLaunched></ToBeLaunched>
    </>
  );
}
