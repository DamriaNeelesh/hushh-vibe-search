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
        console.error("No user data found.");
      } else {
        console.log("User data set successfully:", user);
        return user;
      }
      console.log("Name:", user.data.user.user_metadata?.full_name);
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
    } catch (error) {
      console.error("Error signing in:", error);
    }
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

  useEffect(()=>{
    services.authentication.getSession()
  }, [])

  return (
    <>
      {/* <Home2/> */}
      {/* <IntroSlide3/> */}
      <Head>
        <title>Home - Vibe Search</title>
      </Head>
      <ToBeLaunched></ToBeLaunched>
    </>
  );
}
